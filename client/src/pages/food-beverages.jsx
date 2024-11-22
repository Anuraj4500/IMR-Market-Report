import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';

const FoodBeverages = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const title = "Food and Beverages Market Research Reports";
    const description = "The global food and beverage industry consist of many sectors, including groceries, oils and fats, food additives, functional foods, beverages, health, natural foods, canned foods, soft drinks and alcoholic beverages, energy drinks and packaging. The industry drives consumer demand for more nutritious food and better packaging, which drives advances in technology. Technological innovation has helped the food and beverage industry reach a new level. The launch of cost-effective and energy-efficient equipment has modernized processes in the food and beverage industry.";

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/reports?cid=8');
                setReports(response.data);
                setError(null);
            } catch (err) {
                setError('Unable to fetch reports. Please try again later.');
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
                        <div className="alert alert-danger" role="alert">{error}</div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-9 order-md-2">
                                {reports.length > 0 ? (
                                    reports
                                        .filter(report => report.cid === '8')
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

export default FoodBeverages; 