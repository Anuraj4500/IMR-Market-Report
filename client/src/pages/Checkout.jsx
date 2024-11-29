import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ServiceFeature from '../components/ServiceFeature';
import Deliverables from '../components/Deliverables';
import Breadcrumb from '../components/Breadcrumb';
 
function Checkout() {
    const { id } = useParams();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const license = searchParams.get('license') || 'single';
 
    const [reportData, setReportData] = useState({
        id: '',
        title: '',
        price: 0,
        userType: '',
        captcha: 'ABC123'
    });
 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        city: '',
        state: '',
        country: 'US',
        phone: '',
        message: '',
        usercaptcha: ''
    });
 
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        const fetchReportData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5000/api/reports/${id}`);
                if (response.data) {
                    let price;
                    let userType;
                    switch(license) {
                        case 'multi':
                            price = response.data.mprice;
                            userType = 'Multi User';
                            break;
                        case 'enterprise':
                            price = response.data.eprice;
                            userType = 'Enterprise User';
                            break;
                        default:
                            price = response.data.sprice;
                            userType = 'Single User';
                    }
                   
                    setReportData({
                        id: response.data.id,
                        title: response.data.title,
                        price: price,
                        userType: userType,
                        captcha: 'ABC123'
                    });
                } else {
                    alert('No report data found.');
                }
            } catch (err) {
                console.error("Error fetching report data:", err);
                alert('Error fetching report data. Please try again.');
            } finally {
                setLoading(false);
            }
        };
 
        fetchReportData();
    }, [id, license]);
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
   
        if (loading) {
            alert('Data is still loading. Please wait.');
            return;
        }
   
        if (!reportData?.id) {
            alert('Report data not available. Please try again.');
            return;
        }
   
        try {
            const sampleRequestData = {
                ...formData,
                reportId: reportData._id,
                reportTitle: reportData.title,
                slug: reportData.slug,
                category: reportData.category,
                requestDate: new Date().toISOString(),
            };
   
            const response = await axios.post(
                'http://localhost:5000/api/checkout',
                sampleRequestData,
                { headers: { 'Content-Type': 'application/json' } }
            );
   
            if (response.status === 201) {
                // Clear form and redirect to thank-you page
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    company: '',
                    designation: '',
                    message: '',
                });
                alert('Sample request submitted successfully!');
                window.location.href = '/thank-you'; // Redirect to thank-you page
            }
        } catch (err) {
            console.error("Error submitting sample request:", err);
            alert(err.response?.data?.message || 'Error submitting request. Please try again.');
        }
    };
   
 
    useEffect(() => {
        console.log("PayPal script loading...");
       
        const script = document.createElement('script');
        // script.src = "https://www.paypal.com/sdk/js?client-id=AU-E2K8OU1d4hRlDPyXeBCTzH06roF3rOqutmlRLsPgTQu6jycBCOECkDYvzvjmrPVD410xedIsEfKEs&currency=USD";
        script.async = true;
   
        script.onload = () => {
            console.log("PayPal script loaded successfully.");
            if (window.paypal) {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: reportData.price.toString()
                                }
                            }]
                        });
                    },
                    onApprove: async (data, actions) => {
                        const result = await actions.order.capture();
                       
                        try {
                            // Update payment status in MongoDB
                            await axios.put(`http://localhost:5000/api/checkout/${reportData.id}/payment`, {
                                paymentStatus: 'completed',
                                paypalOrderId: result.id
                            });
                            console.log('Payment successful and updated in MongoDB:', result);
                        } catch (err) {
                            console.error('Error updating payment status in MongoDB:', err);
                        }
                    }
                }).render('#paypal-button-container');
            } else {
                console.error("PayPal SDK failed to load.");
            }
        };
   
        script.onerror = (err) => {
            console.error("Error loading PayPal script:", err);
        };
   
        document.body.appendChild(script);
   
        return () => {
            document.body.removeChild(script);
        };
    }, [reportData.price]);
   
    const breadcrumbItems = [
        { label: 'Checkout' }
    ];
 
    return (
        <div className="container-fluid p-0">
            <main id="main">
                <Breadcrumb items={breadcrumbItems} />
 
                <section className="inner-page">
                    <div className="row">
                        <div className='col-12 col-lg-3'>
                            <ServiceFeature />
                        </div>
 
                        <div className="col-12 col-lg-6">
                            <div className="report-header">
                                <h2>{reportData.title}</h2>
                                <hr />
                            </div>
 
                            <form onSubmit={handleSubmit} id="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required
                                            value={formData.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Business Email" required
                                            value={formData.email} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <input type="text" name="designation" className="form-control" id="designation" placeholder="Designation" required
                                            value={formData.designation} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="city" className="form-control" id="city" placeholder="City" required
                                            value={formData.city} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="state" className="form-control" id="state" placeholder="State" required
                                            value={formData.state} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <select name="country" className="form-control" value={formData.country} onChange={handleInputChange}>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="GB">United Kingdom</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required
                                            value={formData.phone} onChange={handleInputChange} />
                                    </div>
                                </div>
 
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"
                                        value={formData.message} onChange={handleInputChange}></textarea>
                                </div>
 
                                <ul className="request-privacy">
                                    <li>We do not share your details. Read more about our <a href="https://www.imrmarketreports.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policies</a></li>
                                </ul>
 
                                <input type="hidden" name="id" id="id" value={reportData.id} />
                                <input type="hidden" name="user" value={reportData.userType} />
                                <input type="hidden" name="price" value={reportData.price} />
                                <input type="hidden" name="report" id="report" value={reportData.title} />
 
                                <div>
                                    <b style={{ background: '#e9e9e9', fontSize: '16pt', padding: '5px', fontWeight: 'bold', float: 'left' }}>{reportData.captcha}</b>
                                    <input
                                        style={{ width: '50%', padding: '5px' }}
                                        type="text"
                                        placeholder="Enter Captcha"
                                        name="usercaptcha"
                                        required
                                        value={formData.usercaptcha}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <br />
 
                                <div id="fill-form-message" style={{ color: 'red', display: 'block', textAlign: 'center' }}>
                                    Please fill out the form to enable the PayPal button for payment.
                                </div>
 
                                <div id="paypal-button-container" className="text-center" style={{display: 'none'}}>
                                    <h4><i>Pay with PayPal</i></h4>
                                </div>
 
                                <div className="form-group text-center">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
 
                        <div className="col-12 col-lg-3">
                            <div className="card license">
                                <div className="card-header style-card-header">
                                    ORDER DETAILS
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr>
                                                <th scope="row">REPORT ID : </th>
                                                <td>{reportData.id}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">USER TYPE : </th>
                                                <td>{reportData.userType}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">SUBTOTAL : </th>
                                                <td>${reportData.price}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">TOTAL : </th>
                                                <td>${reportData.price}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
 
                            <Deliverables />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
 
export default Checkout;