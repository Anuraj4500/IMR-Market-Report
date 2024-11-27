import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
import Pagination from '../components/Pagination';

const AutomotiveTransport = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const title = "Automotive & Transport";
    const description =
        "The automotive and transport industry is a diverse sector that includes a wide range of products that are essential for daily life.";

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/reports?cid=3&page=${currentPage}`);
                
                const extractedReports = response.data.reports || response.data.data || response.data.payload?.reports || [];
                setReports(extractedReports);
                setTotalPages(response.data.totalPages);
            } catch (err) {
                setError(err.response?.data?.message || 'Unable to fetch reports. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <IndustriesBreadcrumb title={title} description={description} />
            <section className="inner-page">
                <div className="container">
                    {error ? (
                        <div className="alert alert-danger">{error}</div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-9 order-md-2">
                                {Array.isArray(reports) && reports.length > 0 ? (
                                    reports.map((report, index) => (
                                        <ReportCard
                                            key={report._id || index}
                                            {...report}
                                        />
                                    ))
                                ) : (
                                    <div>No reports available.</div>
                                )}
                                <Pagination 
                                    page={currentPage} 
                                    totalPages={totalPages} 
                                    onPageChange={handlePageChange} 
                                />
                            </div>
                            <div className="col-lg-3 order-md-1">
                                <IndustryCard />
                                <AssistanceCard2 />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AutomotiveTransport;
