import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
 
const ConsumerGoods = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const title = "Consumer Goods";
    const description = "The consumer goods industry is a diverse sector that includes a wide range of products that are essential for daily life. These products are used by consumers to satisfy their basic needs and improve their quality of life. Consumer goods can be broadly categorized into two types: durable goods and non-durable goods. Durable goods are products that last for a long time and are not consumed quickly, such as appliances, furniture, and vehicles. Non-durable goods are products that are consumed quickly, such as food, beverages, and personal care items.";
 
    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/reports?cid=5');
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
                                        .filter(report => report.cid === '5')
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
 
export default ConsumerGoods;