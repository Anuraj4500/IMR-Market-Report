import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import { Link } from 'react-router-dom';
import ClientCarousel from '../components/Client-Carousel';
import ServiceFeature from '../components/ServiceFeature';

function AskDiscount() {
    const { slug } = useParams();
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        designation: '',
        message: '',
        requestType: 'discount',
        status: 'pending' // Added status field
    });
    const [selectedLicense, setSelectedLicense] = useState('single'); // Default to single user license

    useEffect(() => {
        const fetchReportData = async () => {
            if (!slug) {
                setLoading(false);
                setError("Report slug is missing.");
                return;
            }

            try {
                const response = await axios.get(`imr-market-report-server.vercel.app/api/reports/slug/${slug}`);
                if (!response.data) {
                    throw new Error('No data received from server');
                }
                setReportData(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching report data:", err);
                setError(err.response?.data?.message || "Unable to fetch report data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchReportData();
    }, [slug]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!reportData?.id) {
            alert('Report data not available. Please try again.');
            return;
        }

        try {
            // Create the complete discount request data object
            const discountRequestData = {
                ...formData,
                reportId: reportData.id,
                reportTitle: reportData.title,
                slug: reportData.slug,
                category: reportData.category,
                requestDate: new Date().toISOString(),
                requestType: 'discount',
                status: 'pending'
            };

            console.log('Sending Discount request data:', discountRequestData);

            const response = await axios.post(
                'https://imr-market-report-server.vercel.app/api/ask-discount',
                discountRequestData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log('Server response:', response.data);

            if (response.status === 201) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    country: '',
                    company: '',
                    designation: '',
                    message: '',
                });
                alert('Ask Discount request submitted successfully!');
                window.location.href = '/thank-you'; // Redirect to thank-you page
            }
        } catch (err) {
                    console.error("Error submitting Ask Discount request:", err);
            alert(err.response?.data?.message || 'Error submitting request. Please try again.');
        }
    };

    const breadcrumbItems = [
        { label: reportData?.category || 'Category', link: `/category/${reportData?.category}` },
        { label: ' Discount' }
    ];

    if (loading) return <div className="container mt-5 text-center">Loading...</div>;
    if (error) return <div className="container mt-5 alert alert-danger">{error}</div>;
    if (!reportData) return <div className="container mt-5 text-center">No report data found</div>;

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <div className="container-fluid p-0">
                <main id="main">
                    <section className="inner-page pt-4">
                        <div className="row justify-content-center">
                            <div className="col-lg-3">
                                <ServiceFeature />
                            </div>
                            <div className="col-lg-6">
                                <div className="report-header">
                                    <h2>{reportData.title}</h2>
                                    <hr />
                                    <table className="table table-borderless">
                                        <tbody>
                                            <tr>
                                                <td><strong>Report Code</strong>: IMR-{reportData.id}</td>
                                                <td><strong>Pages</strong>: {reportData.pages}</td>
                                                <td><strong>Published On</strong>: {new Date(reportData.date).toLocaleDateString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <form onSubmit={handleSubmit} className="discount-request-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                id="name"
                                                required
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                required
                                                placeholder="Your Email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                id="phone"
                                                required
                                                placeholder="Your Phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <select
                                                name="country"
                                                className="form-control"
                                                required
                                                value={formData.country}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Select Country</option>
                                                <option value="US">United States</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="CA">Canada</option>
                                                <option value="AU">Australia</option>
                                                {/* Add more countries as needed */}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <input
                                                type="text"
                                                name="company"
                                                className="form-control"
                                                id="company"
                                                required
                                                placeholder="Company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <input
                                                type="text"
                                                name="designation"
                                                className="form-control"
                                                required
                                                id="designation"
                                                placeholder="Designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="5"
                                            placeholder="Message (Optional)"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    <div className="request-privacy mb-3">
                                        <small>We do not share your details. Read more about our Privacy Policies</small>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary request-btn"
                                            disabled={loading}
                                        >
                                            <i className="bx bx-send"></i>&nbsp;Send Discount Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3">
                                <div className="text-center mb-3">
                                    <a
                                        href={`/reports/${reportData.slug}`}
                                        className="btn btn-secondary summary-btn"
                                    >
                                        <i className="bx bx-file"></i>&nbsp;View Summary &amp; TOC
                                    </a>
                                </div>
                                <div className="col-lg-12">
                                    <div className="card license">
                                        <div className="card-header style-card-header">
                                            License Details
                                        </div>
                                        <div className="card-body">
                                            <form method="GET" action="#" style={{ margin: 0 }}>
                                                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                                    <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                        <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                            <input
                                                                type="radio"
                                                                id="_single"
                                                                name="user"
                                                                value="single"
                                                                defaultChecked
                                                                onChange={(e) => setSelectedLicense(e.target.value)}
                                                            />
                                                            <span className="checkmark"></span>&nbsp;
                                                            <span style={{ float: 'left' }}>&nbsp;&nbsp;&nbsp;Single User </span>
                                                            <span style={{ float: 'right' }}>&nbsp; &#36;{reportData.sprice}</span>
                                                        </li>
                                                    </label>
                                                    <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                        <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                            <input
                                                                type="radio"
                                                                id="_multi"
                                                                name="user"
                                                                value="multi"
                                                                onChange={(e) => setSelectedLicense(e.target.value)}
                                                            />
                                                            <span className="checkmark"></span>&nbsp;&nbsp;
                                                            <span style={{ float: 'left' }}>&nbsp;&nbsp;&nbsp;Multi User </span>
                                                            <span style={{ float: 'right' }}>&nbsp; &#36;{reportData.mprice}</span>
                                                        </li>
                                                    </label>
                                                    <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                        <li className="list-group-item" style={{ cursor: 'pointer' }}>
                                                            <input
                                                                type="radio"
                                                                id="_enterp"
                                                                name="user"
                                                                value="enterprise"
                                                                onChange={(e) => setSelectedLicense(e.target.value)}
                                                            />
                                                            <span className="checkmark"></span>&nbsp;&nbsp;
                                                            <span style={{ float: 'left' }}>&nbsp;&nbsp;&nbsp;Enterprise User </span>
                                                            <span style={{ float: 'right' }}>&nbsp; &#36;{reportData.eprice}</span>
                                                        </li>
                                                    </label>
                                                </ul>
                                                <input type="number" value={reportData.id} name="id" readOnly style={{ visibility: 'hidden' }} /><br />
                                                <Link
                                                    to={`/Checkout/${reportData.slug}?license=${selectedLicense}`}
                                                    className=" btn custom_btn_buy"
                                                >
                                                    <i class="fas fa-shopping-cart"></i>&nbsp;BUY NOW
                                                </Link>
                                                <br /><br />


                                            </form>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="card disclaimer mt-2">
                            <div class="card-body">
                                <h6><strong>Disclaimer</strong></h6>
                                <hr />
                                <ol>
                                    <li>The sample is just to give you an overview of how the full version of the report would look like or structured.</li>
                                    <li> The sample report pages will not provide you any qualitative or quantitative data
                                        it will be always in empty or cross tick format due to the nature of the business
                                        and as we deal with an intellectual property we are not allowed to share any
                                        data pre-purchase of the report.</li>
                                    <li>Sample report pages always have just a mild definition of the
                                        market overview, a section representation according to the Table of Contents.</li>
                                    <li>Whereas the full and final version of the report would provide you all
                                        the comprehensive, qualitative or quantitative data of actual content.</li>
                                </ol>
                            </div>
                        </div>
                        <ClientCarousel />
                    </section>
                </main>
            </div>
        </>
    );
}

export default AskDiscount;
