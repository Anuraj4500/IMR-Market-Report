import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const openSearch = () => {
    console.log('Search button clicked');
  };

  return (
    <>
      <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a href="mailto:info@imrmarketreports.com"><i className="icofont-email"></i> Email Us</a> &nbsp; | &nbsp;<span> <a
                href="skype:live:.cid.6c0df9411dcbe948?chat"><i className="icofont-skype"></i> Skype</a></span>
          </div>
          <div className="d-flex align-items-center">
            <i className="icofont-phone"></i> Call us now &nbsp;<a href="">+91-81800-96367</a>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <a href="https://www.imrmarketreports.com" className="logo mr-auto"><img src="https://www.imrmarketreports.com/assets/img/test/IMRLogo.png"
              alt="IMR Market Reports" style={{ width: '100%', height: '100%' }} /></a>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <h1 className="logo mr-auto"><a href="index.html">Medicio</a></h1> */}

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/reports-store">Reports Store</Link></li>

              <li className="drop-down"><Link to="/industries">Industries</Link>
                <ul>
                  <li><Link to="/industries/aerospace-defense">Aerospace &amp; Defense</Link></li>
                  <li><Link to="/industries/agriculture">Agriculture</Link></li>
                  <li><Link to="/industries/automotive-transport">Automotive &amp; Transport</Link></li>
                  <li><Link to="/industries/chemicals-materials">Chemicals &amp; Materials</Link></li>
                  <li><Link to="/industries/consumer-goods">Consumer Goods</Link></li>
                  <li><Link to="/industries/electronics-semiconductors">Electronics &amp; Semiconductors</Link></li>
                  <li><Link to="/industries/energy-natural-resources">Energy &amp; Natural Resources</Link></li>
                  <li><Link to="/industries/food-beverages">Food &amp; Beverages</Link></li>
                  <li><Link to="/industries/healthcare">Healthcare</Link></li>
                  <li><Link to="/industries/it-telecom">IT &amp; Telecom</Link></li>
                  <li><Link to="/industries/manufacturing-construction">Manufacturing &amp; Construction</Link></li>
                  <li><Link to="/industries/service-industry">Service Industry</Link></li>
                </ul>
              </li>
              <li><Link to="/publishers">Publishers</Link></li>
              <li className="drop-down"><Link to="/about-us">About Us</Link>
                <ul>
                  <li><Link to="/about-us/our-company">Our Company</Link></li>
                  <li><Link to="/about-us/our-clients">Our Clients</Link></li>
                  <li><Link to="/about-us/faqs">FAQ's</Link></li>
                  <li><Link to="/about-us/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
              <li><button className="openBtn" onClick={openSearch}><i className="bx bx-search"></i></button></li>

            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}

        </div>
      </header>
      {/* <!-- End Header --> */}

      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={() => document.getElementById('myOverlay').style.display = 'none'} title="Close Overlay">×</span>

        <div className="overlay-content">
          <form action="https://www.imrmarketreports.com/search/" method="get">
            <input type="text" className="overlay-form" placeholder="Search For Market Reports / Keywords" name="q" />
            <button type="submit"><i className="bx bx-search"></i></button><br />
          </form>
        </div>
      </div>
    </>
  );
};

export default NavMenu;