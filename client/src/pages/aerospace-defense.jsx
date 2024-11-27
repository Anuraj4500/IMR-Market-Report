import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
import Pagination from '../components/Pagination';

const AerospaceDefense = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const title = "Aerospace & Defense";
    const description =
        "The consumer goods industry is a diverse sector that includes a wide range of products that are essential for daily life.";

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/reports?cid=1&page=${page}&limit=10`);
                
                console.log("API Response:", response.data); // Debug: Raw API response

                const extractedReports = response.data.reports || response.data.data || response.data.payload?.reports || [];
                console.log("Extracted Reports:", extractedReports); // Debug: Extracted reports

                setReports(extractedReports); // Save extracted data
                setTotalPages(response.data.totalPages || 0); // Set total pages
            } catch (err) {
                console.error("Error fetching reports:", err);
                setError(
                    err.response?.data?.message || 'Unable to fetch reports. Please try again later.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, [page]);

    const handlePageChange = (newPage) => {
        setPage(newPage);
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
                                    <>
                                        {reports.map((report, index) => (
                                            <ReportCard
                                                key={report._id || index}
                                                {...report}
                                            />
                                        ))}
                                        <Pagination 
                                            page={page} 
                                            totalPages={totalPages} 
                                            onPageChange={handlePageChange} 
                                        />
                                    </>
                                ) : (
                                    <div>No reports available.</div>
                                )}
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

export default AerospaceDefense;
