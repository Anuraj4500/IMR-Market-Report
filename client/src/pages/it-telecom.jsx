import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';

const ITTelecom = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const title = "IT and Telecom Market Research Reports";
    const description = "The global Information Technology Industry is highly booming. Today, while discussing about economic maturation which is occurring throughout the globe, one name that evidences its robust lead is Information technology (IT) industry. In comparison with other cultivating industries the IT industry has assisted in increasing productivity in the developed world, and therewith IT industry is a vital factor in growth of global economy.";

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/reports?cid=10');
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
            <IndustriesBreadcrumb title={title} description={description} />
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
                                    reports
                                        .filter(report => report.cid === '10')
                                        .map(report => (
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
                                <AssistanceCard2 />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ITTelecom; 