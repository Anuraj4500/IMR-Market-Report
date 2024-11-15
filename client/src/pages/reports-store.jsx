import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard from '../components/Assistance-Card';
 
const ReportsStore = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
 
    const breadcrumbItems = [
        { label: 'Report Store' }
    ];
 
    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/reports');
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
 
    return (
        <div>
            <Breadcrumb items={breadcrumbItems} />
            <section className="inner-page">
                <div className="container">
                    {error ? (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-9 order-md-2">
                                {reports.length > 0 ? (
                                    reports.map(report => (
                                        <ReportCard
                                            key={report._id}
                                            {...report}
                                        />
                                    ))
                                ) : (
                                    <div>No reports available.</div>
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