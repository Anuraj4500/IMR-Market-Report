import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClientCarousel from '../components/Client-Carousel';
import AssistanceCard from '../components/Assistance-Card';
 
const Reports = () => {
    const { url } = useParams();
    const [reportData, setReportData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('home');
    const [relatedReports, setRelatedReports] = useState([]);
 
    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/reports/slug/${url}`);
                setReportData(response.data);
                setError(null);
                fetchRelatedReports(response.data.cid);
            } catch (err) {
                console.error("Error fetching report:", err);
                setError(err.response?.data?.message || 'Unable to fetch report. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
 
        const fetchRelatedReports = async (cid) => {
            try {
                const response = await axios.get(`http://localhost:5000/api/reports?cid=${cid}`);
                setRelatedReports(response.data.reports);
            } catch (err) {
                console.error("Error fetching related reports:", err);
            }
        };
 
        if (url) {
            fetchReport();
        } else {
            setLoading(false);
            setError('Report url is missing.');
        }
    }, [url]);
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }
 
    return (
        <div>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <ol>
                            <li><a href="https://www.imrmarketreports.com">Home</a></li>
                            <li>Aerospace and Defense</li>
                            <li>{reportData.slug}</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="report-header">
                                <h1>{reportData.mtitle}</h1>
                                <hr />
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><strong>Report Code</strong> : IMR-{reportData.id}</td>
                                            <td><strong>Publisher</strong>: Introspective Market Research</td>
                                            <td><strong>Published On</strong>: {new Date(reportData.date).toLocaleDateString()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="main-content">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                                           id="home-tab" 
                                           onClick={() => setActiveTab('home')} 
                                           role="tab" aria-controls="home" 
                                           aria-selected={activeTab === 'home'}>Summary</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
                                           id="profile-tab" 
                                           onClick={() => setActiveTab('profile')} 
                                           role="tab" aria-controls="profile" 
                                           aria-selected={activeTab === 'profile'}>Table of Contents</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" 
                                              id="contact-tab" 
                                              to="/SampleRequest" 
                                              role="tab" 
                                              aria-controls="contact" 
                                              aria-selected="false">Free Sample</Link>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`} 
                                         id="home" 
                                         role="tabpanel" 
                                         aria-labelledby="home-tab" 
                                         style={{ justifyContent: 'end' }}>
                                        <div dangerouslySetInnerHTML={{ __html: reportData.summary_desc }}></div>
                                    </div>
                                    <div className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`} 
                                         id="profile" 
                                         role="tabpanel" 
                                         aria-labelledby="profile-tab">
                                        <div dangerouslySetInnerHTML={{ __html: reportData.toc }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="report-contact row">
                                <div className="card request-card col-lg-6">
                                    <h4>Get Latest Sample</h4>
                                    <a target="_blank" href="#" className="btn"><i
                                        className="bx bx-download"></i>&nbsp;Free Sample</a>
                                </div>
                                <div className="card buy-now-card col-lg-6">
                                    <h4>Purchase Full Report</h4>
                                    <a target="_blank" href="#" className="btn"><i
                                        className="bx bx-cart"></i>&nbsp;Buy Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card license">
                                <div className="card-header style-card-header">
                                    License Details
                                </div>
                                <div className="card-body">
                                    <form method="GET" action="#" style={{ margin: 0 }}>
                                        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                                            <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                <li className="list-group-item" style={{ cursor: 'pointer' }}><input type="radio"
                                                    id="_single" name="user" value="1" checked /><span
                                                    className="checkmark"></span>&nbsp;<span style={{ float: 'left' }}>
                                                    &nbsp;&nbsp;&nbsp;Single User </span> <span style={{ float: 'right' }}>
                                                    &nbsp; &#36;${reportData.sprice}</span></li>
                                            </label>
                                            <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                <li className="list-group-item" style={{ cursor: 'pointer' }}><input type="radio"
                                                    id="_multi" name="user" value="2" /><span
                                                    className="checkmark"></span>&nbsp;&nbsp;<span style={{ float: 'left' }}>
                                                    &nbsp;&nbsp;&nbsp;Multi User </span> <span style={{ float: 'right' }}>
                                                    &nbsp; &#36;${reportData.mprice}</span></li>
                                            </label>
                                            <label style={{ width: '100%', margin: 0, padding: 0 }} className="radio">
                                                <li className="list-group-item" style={{ cursor: 'pointer' }}><input type="radio"
                                                    id="_enterp" name="user" value="3" /><span
                                                    className="checkmark"></span>&nbsp; &nbsp;<span style={{ float: 'left' }}>
                                                    &nbsp;&nbsp;&nbsp;Enterprise User </span> <span
                                                    style={{ float: 'right' }}>
                                                    &nbsp; &#36;${reportData.eprice}</span></li>
                                            </label>
                                        </ul>
                                        <input type="number" value={reportData.id} name="id" readOnly style={{ visibility: 'hidden' }} />
                                        <Link to="/Checkout" className="custom_btn_buy"><i className="bx bx-cart"></i>&nbsp;BUY
                                            NOW </Link>
                                        <br /><br />
                                        <Link to="/SampleRequest" className="btn custom_btn_request" ><i
                                            className="bx bxs-download bx-fade-down-hover"></i>&nbsp;REQUEST SAMPLE</Link>
                                        <br /><br />
                                        <a className="btn custom_btn_buy"
                                            href="#"><i
                                                className="bx bxs-purchase-tag"></i>&nbsp;ASK FOR DISCOUNT</a>
                                    </form>
                                </div>
                            </div>
                            <div className="card related-reports">
                                <div className="card-header style-card-header">
                                    Related Reports
                                </div>
                                <div className="card-body">
                                    <ul style={{ listStyleType: 'none', padding: 0, marginLeft: '5%', marginRight: '5%' }}>
                                        {relatedReports.slice(0, 3).map(report => (
                                            <li key={report.id}>
                                                <i className="bx bx-chevron-right"></i> &nbsp; 
                                                <Link to={`/reports/${report.slug}`} target="_blank">{report.keyword}</Link>
                                                <hr />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <AssistanceCard />
                        </div>
                    </div>
                    <ClientCarousel />
                </div>
            </section>
        </div>
    );
};
 
export default Reports;