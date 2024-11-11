import React from 'react';

const NavMenu = () => {
  // Define the openSearch function as a placeholder
  const openSearch = () => {
    // Add your search functionality here
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
              <li><a href="https://www.imrmarketreports.com">Home</a></li>
              <li><a href="https://www.imrmarketreports.com/reports-store/">Reports Store</a></li>

              <li className="drop-down"><a href="">Industries</a>
                <ul>
                  <li><a href="https://www.imrmarketreports.com/aerospace-defense/">Aerospace &amp; Defense</a></li>
                  <li><a href="https://www.imrmarketreports.com/agriculture/">Agriculture</a></li>
                  <li><a href="https://www.imrmarketreports.com/automotive-transport/">Automotive &amp; Transport</a></li>
                  <li><a href="https://www.imrmarketreports.com/chemicals-materials/">Chemicals &amp; Materials</a></li>
                  <li><a href="https://www.imrmarketreports.com/consumer-goods/">Consumer Goods</a></li>
                  <li><a href="https://www.imrmarketreports.com/electronics-semiconductors/">Electronics &amp;
                      Semiconductors</a></li>
                  <li><a href="https://www.imrmarketreports.com/energy-natural-resources/">Energy &amp; Natural Resources</a>
                  </li>
                  <li><a href="https://www.imrmarketreports.com/food-beverages/">Food &amp; Beverages</a></li>
                  <li><a href="https://www.imrmarketreports.com/healthcare/">Healthcare</a></li>
                  <li><a href="https://www.imrmarketreports.com/it-telecom/">IT &amp; Telecom</a></li>
                  <li><a href="https://www.imrmarketreports.com/manufacturing-construction/">Manufacturing &amp;
                      Construction</a></li>
                  <li><a href="https://www.imrmarketreports.com/service-industry/">Service Industry</a></li>
                </ul>
              </li>
              <li><a href="https://www.imrmarketreports.com/publishers/">Publishers</a></li>
              <li className="drop-down"><a href="">About Us</a>
                <ul>
                  <li><a href="https://www.imrmarketreports.com/our-company/">Our Company</a></li>
                  <li><a href="https://www.imrmarketreports.com/clients/">Our Clients</a></li>
                  <li><a href="https://www.imrmarketreports.com/faq/">FAQ's</a></li>
                  <li><a href="https://www.imrmarketreports.com/privacy-policy/">Privacy Policy</a></li>
                </ul>
              </li>
              <li><a href="https://www.imrmarketreports.com/contact-us/">Contact</a></li>
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
          {/* <h3>Search For Market Research Reports</h3> */}
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
