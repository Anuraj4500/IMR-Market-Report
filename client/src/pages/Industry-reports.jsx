import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard from '../components/Assistance-Card';
import { useParams } from 'react-router-dom';

const ReportsStore = () => {
    const { slug } = useParams();
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/api/reports?slug=${slug}&cid=${slug}`);
                setReports(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching reports:", err);
                setError(
                    err.response?.data?.message ||
                    'Unable to fetch reports. Please try again later.'
                );
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const filteredReports = reports.filter(report => report.cid === slug);

    return (
        <div>
            <IndustriesBreadcrumb />
            <section className="inner-page">
                <div className="container">
                    {error ? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-9 order-md-2">
                                {filteredReports.length > 0 ? (
                                    filteredReports.map(report => (
                                        <ReportCard
                                            key={report._id}
                                            {...report}
                                        />
                                    ))
                                ) : (
                                    <div>No reports available for this industry.</div>
                                )}
                            </div>
                            <div className="col-lg-3 order-md-1">
                                <IndustryCard />
                                <AssistanceCard />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ReportsStore;