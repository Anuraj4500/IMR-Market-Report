import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard2 from '../components/AssistanceCard2';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';

const ChemicalsMaterials = () => {
    const [reports, setReports] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const title = "Chemicals & Materials Market Research Reports";
    const description = "The chemicals and materials industry have seen steady growth since the last recession in 2007. The chemical and materials industry includes operations related to the production, purification, distribution and sale of industrial chemicals and products are having a positive impact on the growth of the industry. The chemical and materials industry is very good and has its scope in many fields. Our reports cover all sub-level categories like Advanced Materials, Chemicals, Fibers & Composites, Adhesives & Sealants, Foam & Insulation, Ceramics & Glass, Metals & Minerals, Plastics, Polymers, Etc. Our reports focus on the market trends and emerging technologies that influence demand in chemicals and materials industry.";

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/reports?cid=4');
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
                                        .filter(report => report.cid === '4')
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

export default ChemicalsMaterials;