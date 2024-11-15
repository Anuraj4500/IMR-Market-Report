import React from 'react';
import Reportcover from '../assets/Images/report_cover.webp';
import {Link} from 'react-router-dom';
 
const ReportCard = ({
    id, cid, pid, keyword, title, mtitle, summary, summary_desc, toc, sprice, mprice, eprice,
    pages, date, cdate, slug, created_by, created_time, updated_by, updated_time
}) => {
    return (
        <div className="card categories-reports">
        <div className="card-body row">
            <div className="col-lg-2" id="categories-img">
                <img src={Reportcover} alt="cover page" />
            </div>
            <div className="col-lg-10">
                <h3 id="categories-reports-title">
                    <Link to={`/reports/${slug}`}>{title}</Link>
                </h3>
                <p id="shorten-para">{summary}</p>
                <ul style={{ listStyleType: 'none' }}>
                    <li>IMR ID :  {id} | </li>
                    <li>Pages :{pages}| </li>
                    <li>Date : {new Date(date).toLocaleDateString()}</li>
                    <li style={{ float: 'right' }}><Link to="/SampleRequest" className="btn categories-btn">Request Free Sample</Link></li>
                </ul>
            </div>
        </div>
    </div>
    );
};
 
export default ReportCard;