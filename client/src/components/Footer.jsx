import React from "react";
import FooterLogo from '../assets/img/IMR_Market_Reports_-_Copy-removebg-preview.png';
import {Link} from 'react-router-dom'

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
                  <a href="mailto:info@imrmarketreports.com">info@imrmarketreports.com</a>, 
                  <br />
                  <a href="mailto:sales@imrmarketreports.com">sales@imrmarketreports.com</a>
                </p>
              </div>

              {/* <div className="footer-widget">
              
                <div className="subscribe-form">
                  <form action="#">
                    <input type="email" placeholder="Email Address" required />
                    <button type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div> */}

              <div className="social-menu">
                <span className="text-white">Follw us</span>
                <ul>
                  <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 footers-two">
              <h5 style={{ color: "white" }}>Industries</h5>
              <ul className="list-unstyled">
                <li className="mt-2"><a href="maintenance.html">Aerospace & Defense</a></li>
                <li className="mt-2"><a href="contact.html">Agriculture</a></li>
                <li className="mt-2"><a href="about.html">Automotive & Transport</a></li>
                <li className="mt-2"><a href="about.html">Chemicals & Materials</a></li>
                <li className="mt-2"><a href="about.html">Consumer Goods</a></li>
                <li className="mt-2"><a href="about.html">Electronics & Semiconductor</a></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 footers-three">
              <ul className="list-unstyled mt-4">
                <li className="mt-2"><a href="maintenance.html">Energy & Natural Resources</a></li>
                <li className="mt-2"><a href="contact.html">Food & Beverage</a></li>
                <li className="mt-2"><a href="about.html">Healthcare</a></li>
                <li className="mt-2"><a href="about.html">IT & Telecom</a></li>
                <li className="mt-2"><a href="about.html">Manufacturing & Construction</a></li>
                <li className="mt-2"><a href="about.html">Service Industry</a></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-2 footers-five">
              <h5 style={{ color: "white" }}>Useful Links</h5>
              <ul className="list-unstyled">
                <li><a href="maintenance.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="about.html">Report Store</a></li>
                <li><a href="about.html">Our Clients</a></li>
                <li><a href="about.html">Privacy Policy</a></li>
                <li><Link to="/RefundPolicy">Refund Policy</Link></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><Link to="/TermsAndConditions">Terms & Conditions</Link></li>
                <li><a href="contact.html">FAQ</a></li>
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
                    <a
                      href="https://imrtechsolutions.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: "white" }}
                    >
                      IMR Tech Solutions.
                    </a>
                    <a href="privacy-policy.php" style={{ color: "white" }}>Privacy Policy /</a>
                    <a href="terms&condition.php" style={{ color: "white" }}>Terms & Conditions /</a>
                    <a href="refund-policy.php" style={{ color: "white" }}>Refund Policy</a>
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
