import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
 
const ManufacturingConstruction = () => {
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
                const response = await axios.get('http://localhost:5000/api/reports?cid=11');
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
    const title = "Manufacturing and Construction Market";
    const description = "The machinery and equipment manufacturing sector can also be entitled as that component of the economy which is almost focused on supplying capital produces or their parts to other sectors of the economy, such as the industrial, agricultural or construction sectors with the aim to enhance growth and productivity. Efficiency in engineering, logistics and production of highly competent equipment and machinery are factors that possess the potential to drive the industry to the completely different level. Due to huge size of the sector, it has large scope for skilled industrialists and players.";   

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
                                        .filter(report => report.cid === '11')
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
 
export default ManufacturingConstruction;