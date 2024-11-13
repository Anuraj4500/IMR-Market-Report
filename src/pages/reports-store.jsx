import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ReportCard from '../components/Report-Card';
import IndustryCard from '../components/Industry-Card';
import AssistanceCard from '../components/Assistance-Card';

const ReportsStore = () => {
    const breadcrumbItems = [
        { label: 'Report Store' }
      ];
    return (
        <div>
             <Breadcrumb items={breadcrumbItems} />
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
