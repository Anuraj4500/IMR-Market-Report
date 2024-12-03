import React, { useEffect, useState } from 'react';
import IconicBoxSevenBg from '../assets/Images/iconic-box-seven-bg.png';
import { Link } from 'react-router-dom';

function OurServices() {
    const [ourservices, setOurServices] = useState([]);

    // Function to fetch data from MongoDB
    const fetchOurServices = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/ourservices'); // Replace with your API endpoint
            const data = await response.json();
            setOurServices(data); // Assuming `data` is an array of services
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    useEffect(() => {
        fetchOurServices();
    }, []);

   
    return (
        <div>
            <section className="feature-box-area pt-4 pb-1 rel z-1">
                <div className="container">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>Our <span>Services</span></h2>
                            <p>Strategic Insights for Competitive Advantage</p>
                        </div>
                    </div>
                    <div className="row">
                        {ourservices.map((service) => (
                            <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
                                <div className="iconic-box style-seven">
                                    <div className="icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div className="content">
                                        <h5><Link to={`/Our-Services`}>{service.title}</Link></h5>
                                        <p>{service.desc}</p>
                                    </div>
                                    <div className="bg">
                                        <img src={IconicBoxSevenBg} alt="Shape" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurServices;
