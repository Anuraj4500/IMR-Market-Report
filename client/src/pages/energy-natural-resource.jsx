import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Breadcrumb from '../components/Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
import IndustriesBreadcrumb from "../components/Industries-Breadcrumb";

const EnergyNaturalResource = () => {
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
                const response = await axios.get('http://localhost:5000/api/reports?cid=7');
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
 
    const title = "Energy and Natural Resources";
    const description = "The energy industry is the aggregate of all industries involved in the production and sale of energy, including fuel and oil extraction, manufacturing, refining and distribution. Modern society consumes large amounts of fuel, and the energy industry is an important part of infrastructure and maintenance in almost all countries. To prevent the indiscriminate use of natural resources for energy, governments around the world have imposed strict regulations. It is poised the importance of this sector.";
 
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
                                        .filter(report => report.cid === '7')
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
 
export default EnergyNaturalResource;