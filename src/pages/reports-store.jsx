import React from 'react';
import IndustriesBreadcrumb from '../components/Industries-Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard from '../components/Assistance-Card';

const ReportsStore = () => {
    return (
        <div>
            <IndustriesBreadcrumb />
            <section class="inner-page">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9 order-md-2">
                            <ReportCard />
                        </div>
                        <div class="col-lg-3 order-md-1">
                            <IndustryCard />
                            <AssistanceCard />
                        </div>
                    </div>
                </div>
            </section>    
        </div>
    );
}

export default ReportsStore;