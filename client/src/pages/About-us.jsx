import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/Breadcrumb";
import aboutimages from '../assets/storage/categories_images/231730a7fcb0ad429f593644ca2098e1.svg';
import aboutimages1 from '../assets/storage/categories_images/18cd4294dc564f20c6d9fac1b0678205.svg';
import aboutimages2 from '../assets/storage/categories_images/80cfdeee19265058ccd562f28bb35765.svg';

const AboutUs = () => {
  // State variables for about data, loading and error handling
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch about data when the component mounts
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/aboutus');
        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        console.error("Error fetching Data:", err);
        setError('Unable to fetch Data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []); 

  // Show loading or error message if necessary
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Check if aboutData is available before rendering
  if (!aboutData) return <div>No data available</div>;

  // Breadcrumb Items
  const breadcrumbItems = [
    { label: 'About Us' }
  ];

  return (
    <div>
      {/* Breadcrumbs Section */}
      <BreadCrumb items={breadcrumbItems} />

      {aboutData.map((item, index) => (
      <section id="about-1" className="about" key={index}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={aboutimages} className="img-fluid w-75" alt="About Us Image 1" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>{item.title1}</h3>
              <p className="font-italic">{item.content1}</p>
            </div>
          </div>
        </div>
      </section>
      


      {/* About Section 2 */}
      <section id="about-2" className="about" style={{ backgroundColor: "#4F6A7D", color: "#FFF" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3 style={{ color: "#FA6742" }}>{item.title2}</h3>
              <p className="font-italic">{item.content2}</p>
            </div>
            <div className="col-lg-6">
              <img src={aboutimages1} style={{ width: "80%" }} alt="About Us Image 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counts" style={{ background: "#FA6742" }}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-users-alt-2"></i>
                <span>{item.counter1}</span>
                <p><strong>Clients</strong> served worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span>{item.counter2}</span>
                <p><strong>Reports</strong> collections and counting</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-team"></i>
                <span>{item.counter3}</span>
                <p><strong>Research Analysts</strong> supporting our clients 24X7</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-globe-alt"></i>
                <span>{item.counter4}</span>
                <p><strong>Countries</strong> covered till now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="counts">
        <div className="container">
          <div className="section-title">
            <h2><span>WHY CHOOSE US</span></h2>
          </div>
          <p>{item.content3}</p>
          <div className="card">
            <div className="card-body">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {/* Carousel Items */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>{item.title3}</h3>
                        <hr />
                        <p>{item.content3}</p>
                      </div>
                      <div className="col-md-8 counts-img">
                        <img src={aboutimages2} style={{ width: "100%" }} alt="Why Choose Us Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ))}
    </div>
  );
};

export default AboutUs;
