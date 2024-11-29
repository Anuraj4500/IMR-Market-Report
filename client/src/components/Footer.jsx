import React from "react";
import FooterLogo from '../assets/img/IMR_Market_Reports_-_Copy-removebg-preview.png';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section className="footers pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 footers-one">
              <div className="footers-logo">
                <img src={FooterLogo} alt="Logo" style={{ width: "220px" }} />
              </div>
              <div className="footers-info mt-3">
                <p>
                  APAC Office: Office No. 403, Saudamini Commercial Complex, Kothrud, Pune, India 411038
                  <br />
                  Phone: +91-81800-96367
                  <br />
                  Email:
                  <a href="mailto:info@imrmarketreports.com"> info@imrmarketreports.com</a>,
                  <br />
                  <a href="mailto:sales@imrmarketreports.com"> sales@imrmarketreports.com</a>
                  <div className="newsletter-section mt-2" >
        <form method="post" action="send_mail.com">
          <h4 className="mb-0">Subscribe to our Newsletter</h4>
          <input 
            type="email"
            required
            name="new_email" 
            placeholder="Enter your email address"
            style={{padding: "8px", width: "250px", margin: "10px 0"}}
          />
          <button type="submit" className="btn btn-primary" name="gws_newsletter">
            Submit
          </button>
        </form>
      </div>
                </p>
              </div>

              

              <div className="social-menu">
                <span className="text-white">Follw us</span>
                <ul>
                  <li><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin"></i></Link></li>
                </ul>
                
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 footers-two">
              <h5 className="text-center" style={{ color: "white" }}>Industries</h5>
              <div className="row align-items-center justify-content-center">

                <div className="col-xs-12 col-sm-6 col-md-6 footers-two">

                  <ul className="list-unstyled">
                    <li className="mt-2"><Link to="/aerospace-defense">Aerospace & Defense</Link></li>
                    <li className="mt-2"><Link to="/agriculture">Agriculture</Link></li>
                    <li className="mt-2"><Link to="/automotive-transport">Automotive & Transport</Link></li>
                    <li className="mt-2"><Link to="/chemicals-materials">Chemicals & Materials</Link></li>
                    <li className="mt-2"><Link to="/consumer-goods">Consumer Goods</Link></li>
                    <li className="mt-2"><Link to="/electronics-semiconductors">Electronics & Semiconductor</Link></li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-6 footers-three">
                  <ul className="list-unstyled mt-4">
                    <li className="mt-2"><Link to="/energy-natural-resource">Energy & Natural Resources</Link></li>
                    <li className="mt-2"><Link to="/food-beverages">Food & Beverage</Link></li>
                    <li className="mt-2"><Link to="/healthcare">Healthcare</Link></li>
                    <li className="mt-2"><Link to="/it-telecom">IT & Telecom</Link></li>
                    <li className="mt-2"><Link to="/manufacturing-construction">Manufacturing & Construction</Link></li>
                    <li className="mt-2"><Link to="/service-industry">Service Industry</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5 style={{ color: "white" }}>Useful Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/reports-store">Report Store</Link></li>
                <li><Link to="/Our-Client">Our Clients</Link></li>
                <li><Link to="/Our-Services">Our Services</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/refundPolicy">Refund Policy</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><Link to="/TermsAndConditions">Terms & Conditions</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/Career">Career</Link></li>
              </ul>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      


      <section className="disclaimer border-top p-2">
        <div className="col-md-12 py-2">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center mx-5">
              <div className="col-12 col-lg-6">
                <div className="copyright-text">
                  <p style={{ color: "white" }}>
                    All Rights Reserved 2024 &copy; AkViS Intelligence LLP. Designed and developed by{" "}
                    <Link to="https://imrtechsolutions.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "white" }}>
                      IMR Tech Solutions.
                    </Link>
                    <Link to="/privacy-policy" style={{ color: "white" }}>Privacy Policy /</Link>
                    <Link to="/terms&condition" style={{ color: "white" }}>Terms & Conditions /</Link>
                    <Link to="/refund-policy" style={{ color: "white" }}>Refund Policy</Link>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex">
                <h4 className="text-white" style={{ minWidth: '20%' }}>We Accept</h4>
                <div className="w-60">
                  <img src="Images/buy1.png" className="img-fluid" alt="payment methods" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
