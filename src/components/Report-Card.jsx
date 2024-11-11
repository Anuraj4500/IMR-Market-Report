import React from 'react'
import Reportcover from '../assets/Images/report_cover.webp';
import { Link } from 'react-router-dom';

function ReportCard() {
    return (
        <div>
            <div className="card categories-reports">
                <div className="card-body row">
                    <div className="col-lg-2" id="categories-img">
                        <img src={Reportcover} alt="cover page" />
                    </div>
                    <div className="col-lg-10">
                        <h3 id="categories-reports-title">
                            <Link to='/reports'>Europe Compressed Air Foam System (CAFS)</Link>
                        </h3>
                        <p id="shorten-para">Europe Compressed Air Foam System (CAFS) comes with extensive industry analysis of development components, patterns, flows, and sizes. The report calculates present</p>
                        <ul style={{ listStyleType: 'none' }}>
                            <li>IMR ID :  327067 | </li>
                            <li>Pages : 300 | </li>
                            <li>Date : October 2024</li>
                            <li style={{ float: 'right' }}><a className="btn categories-btn" href='#'>Request Free Sample</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ReportCard
