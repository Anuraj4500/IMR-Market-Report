import React, { useEffect } from 'react';
import ServiceFeature from '../components/ServiceFeature';
import Deliverables from '../components/Deliverables';
import Breadcrumb from '../components/Breadcrumb';

function Checkout() {
    const reportData = {
        title: "Sample Report Title",  // Replace with actual data
        slug: "sample-report-slug",  // Replace with actual data
        keyword: "Sample Keyword",  // Replace with actual data
        id: "12345",  // Replace with actual ID
        price: 100,  // Replace with actual price
        userType: "Business",  // Replace with actual user type
        captcha: Math.floor(Math.random() * 9000) + 1000
    };

    useEffect(() => {
        console.log("PayPal script loading...");
        
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AU-E2K8OU1d4hRlDPyXeBCTzH06roF3rOqutmlRLsPgTQu6jycBCOECkDYvzvjmrPVD410xedIsEfKEs&currency=USD";
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
                    onApprove: (data, actions) => {
                        return actions.order.capture().then((orderData) => {
                            console.log('Payment successful:', orderData);
                        });
                    }
                }).render('#paypal-button-container');
            } else {
                console.error("PayPal SDK failed to load.");
            }
        };
    
        // Error handling for script loading
        script.onerror = (err) => {
            console.error("Error loading PayPal script:", err);
            // Display error to the user or handle it appropriately
        };
    
        document.body.appendChild(script);
    
        // Cleanup script when component unmounts
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
                {/* Breadcrumbs Section */}
                <Breadcrumb items={breadcrumbItems} />

                {/* Inner Page Section */}
                <section className="inner-page">
                    <div className="row">
                        {/* Left Column - Service Features */}
                        <div className='col-12 col-lg-3'>
                            <ServiceFeature />
                        </div>

                        {/* Middle Column - Form */}
                        <div className="col-12 col-lg-6">
                            <div className="report-header">
                                <h2>{reportData.title}</h2>
                                <hr />
                            </div>

                            <form method="POST" action="https://www.sandbox.paypal.com/cgi-bin/webscr" id="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Business Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group mb-3">
                                        <input type="text" name="address" className="form-control" id="address" placeholder="Address" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="city" className="form-control" id="city" placeholder="City" required />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="state" className="form-control" id="state" placeholder="State" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <select name="country" className="form-control">
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="GB">United Kingdom</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                                </div>

                                <ul className="request-privacy">
                                    <li>We do not share your details. Read more about our <a href="https://www.imrmarketreports.com/privacy-policy/" target="_blank">Privacy Policies</a></li>
                                </ul>

                                <input type="hidden" name="id" id="id" value={reportData.id} />
                                <input type="hidden" name="user" value={reportData.userType} />
                                <input type="hidden" name="price" value={reportData.price} />
                                <input type="hidden" name="report" id="report" value={reportData.title} />

                                <div>
                                    <b style={{ background: '#e9e9e9', fontSize: '16pt', padding: '5px', fontWeight: 'bold', float: 'left' }}>{reportData.captcha}</b>
                                    <input style={{ width: '50%', padding: '5px' }} type="text" placeholder="Enter Captcha" name="usercaptcha" required />
                                </div>
                                <br />

                                <div id="fill-form-message" style={{ color: 'red', display: 'block', textAlign: 'center' }}>
                                    Please fill out the form to enable the PayPal button for payment.
                                </div>

                                {/* PayPal button container */}
                                <div id="paypal-button-container" className="text-center">
                                    <h4><i>Pay with PayPal</i></h4>
                                </div>
                            </form>
                        </div>

                        {/* Right Column - Order Details */}
                        <div className="col-12 col-lg-3">
                            <div className="card license">
                                <div className="card-header style-card-header">ORDER DETAILS</div>
                                <div className="card-body">
                                    <table className="table table-striped">
                                        <tbody>
                                            <tr><th scope="row">REPORT ID:</th><td>{reportData.id}</td></tr>
                                            <tr><th scope="row">USER TYPE:</th><td>{reportData.userType}</td></tr>
                                            <tr><th scope="row">TOTAL:</th><td>${reportData.price}</td></tr>
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
