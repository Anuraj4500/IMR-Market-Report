import React from "react";
import BreadCrumb from "../components/Breadcrumb";
import aboutimages from '../assets/storage/categories_images/231730a7fcb0ad429f593644ca2098e1.svg';
import aboutimages1 from '../assets/storage/categories_images/18cd4294dc564f20c6d9fac1b0678205.svg';
import aboutimages2 from '../assets/storage/categories_images/80cfdeee19265058ccd562f28bb35765.svg';

const AboutUs = () => {
  const breadcrumbItems = [
    { label: 'About Us' }
  ];
  // Static values (can be replaced with dynamic data as needed)
  const title1 = "IMR Market Reports an Innovative Market Research Company";
  const content1 = "IMR Market Reports is a visionary market research company who is ready to assist their clients to grow their business by offering strategies through our market research reports for gaining success. We have a well experienced team, who work efficiently and provides complete excellent research data in a complete sync to provide overall coverage and accurate market insights on various industries.The company excels in competitive benchmarking, recognizing its importance in market research. With extensive industry expertise, modern methodologies, and access to a vast global database, they deliver both off-the-shelf and customized research solutions. We are more than just a market research firm; we are solution providers.";
  const title2 = "Our Research Methodology";
  const content2 = `The research process involved the study of various factors affecting the industry, including the government policy, market environment, competitive landscape, historical data, present trends in the market, technological innovation, upcoming technologies and the technical progress in related industry, and market risks, opportunities, market barriers and challenges.

Primary Source: The primary sources from the demand side include industry experts such as business leaders, marketing and sales directors, technology and innovation directors, supply chain executive, end use (product buyers), and related key executives from various key companies and organizations operating in the global market.

Secondary Source: Secondary sources include such as press releases, annual reports, non-profit organizations, industry associations, governmental agencies and customs data, etc.`;
  const counter1 = 500;
  const counter2 = 200;
  const counter3 = 50;
  const counter4 = 30;
  const content3 = "Why choose us? Here's why we stand out.";
  const title3 = "Why Choose Us - Section 3";

  return (
    <div>
      {/* Breadcrumbs Section */}
      <BreadCrumb items={breadcrumbItems} />

      {/* About Section 1 */}
      <section id="about-1" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={aboutimages} className="img-fluid w-75" alt="About Us Image 1" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>{title1}</h3>
              <p className="font-italic">{content1}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section 2 */}
      <section id="about-2" className="about" style={{ backgroundColor: "#4F6A7D", color: "#FFF" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3 style={{ color: "#FA6742" }}>{title2}</h3>
              <p className="font-italic">{content2}</p>
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
                <span>{counter1}</span>
                <p><strong>Clients</strong> served worldwide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-document-folder"></i>
                <span>{counter2}</span>
                <p><strong>Reports</strong> collections and counting</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-team"></i>
                <span>{counter3}</span>
                <p><strong>Research Analysts</strong> supporting our clients 24X7</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box">
                <i className="icofont-globe-alt"></i>
                <span>{counter4}</span>
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
          <p>{content3}</p>
          <div className="card">
            <div className="card-body">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {/* Carousel Items */}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <h3>{title3}</h3>
                        <hr />
                        <p>{content3}</p>
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
    </div>
  );
}

export default AboutUs;
