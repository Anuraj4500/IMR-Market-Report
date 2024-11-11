import React from 'react';
import clientA from '../assets/Images/test/Clients/a.png';
import clientB1 from '../assets/Images/test/Clients/b1.png';
import clientC from '../assets/Images/test/Clients/c.png';
import clientD from '../assets/Images/test/Clients/d.png';
import clientE from '../assets/Images/test/Clients/e.png';
import clientF2 from '../assets/Images/test/Clients/f2.png';
import clientG from '../assets/Images/test/Clients/g.png';
import clientH from '../assets/Images/test/Clients/h.png';
import clientI from '../assets/Images/test/Clients/i.png';
import clientJ from '../assets/Images/test/Clients/j.png';
import clientK from '../assets/Images/test/Clients/k.png';
import clientL from '../assets/Images/test/Clients/l.png';
import clientM from '../assets/Images/test/Clients/m.png';

function ClientCarousel() {
  return (
    <div>
      {/* <!-- Client Logos Area Start --> */}
      <section className="client-logo-area-two pt-90 rpt-70 pb-80 rpb-60 bgp-center services-section" style={{ backgroundImage: 'url(../assets/Images/test/Clients/circle.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center p-4 pt-0">
              <div className="ot-heading v3 mb-0">
                <span>Our Clients </span>
                <h2 className="main-heading text-dark">Trusted by Clients across world</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientA} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientB1} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500" data-aos-offset="50">
                <a href="#"><img src={clientC} className="img-fluid" alt="Client Logo" /></a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientD} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientE} className="img-fluid" alt="Client Logo" /></a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientF2} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientG} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1500" data-aos-offset="50">
                <a href="#"><img src={clientH} className="img-fluid" alt="Client Logo" /></a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientI} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientJ} className="img-fluid" alt="Client Logo" /></a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientK} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientL} className="img-fluid" alt="Client Logo" /></a>
              </div>
              <div className="client-logo-item style-three" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000" data-aos-offset="50">
                <a href="#"><img src={clientM} className="img-fluid" alt="Client Logo" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Client Logos Area End --> */}
    </div>
  );
}

export default ClientCarousel;
