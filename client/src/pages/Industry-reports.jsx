import React, { useEffect, useState } from "react";
import axios from "axios";
import IndustriesBreadcrumb from "../components/Industries-Breadcrumb";
import ReportCard from "../components/Report-Card";
import IndustryCard from "../components/Industry-Card";
import AssistanceCard2 from "../components/AssistanceCard2";
import { useParams } from "react-router-dom";

const ReportsStore = () => {
    const { slug } = useParams(); // Extract category slug from URL
    const [reports, setReports] = useState([]); // Stores reports for the category
    const [error, setError] = useState(null); // Error handling
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchCategoryAndReports = async () => {
            try {
                setLoading(true);

                // Fetch the category data by slug
                const categoryResponse = await axios.get(
                    `http://localhost:5000/api/category?slug=${slug}`
                );
                const category = categoryResponse.data;

                if (!category || !category.id) {
                    throw new Error("Category not found.");
                }

                // Fetch all reports and filter by category ID
                const reportsResponse = await axios.get(
                    `http://localhost:5000/api/reports`
                );
                const allReports = reportsResponse.data;

                // Filter reports where cid matches the category id
                const matchedReports = allReports.filter(
                    (report) => report.cid === category.id
                );

                setReports(matchedReports); // Update state with matched reports
                setError(null); // Clear errors if successful
            } catch (err) {
                console.error("Error fetching category or reports:", err);
                setError(
                    err.response?.data?.message ||
                    "Unable to fetch data. Please try again later."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryAndReports();
    }, [slug]); // Re-fetch data if slug changes

    // Show loading spinner
    if (loading) {
        return <div>Loading...</div>;
    }

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
                            {/* Reports Section */}
                            <div className="col-lg-9 order-md-2">
                                {reports.length > 0 ? (
                                    reports.map((report) => (
                                        <ReportCard key={report.id} {...report} />
                                    ))
                                ) : (
                                    <div>No reports available for this category.</div>
                                )}
                            </div>

                            {/* Sidebar Section */}
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

export default ReportsStore;
