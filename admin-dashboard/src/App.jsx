import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';

// import Footer from './components/Footer'; 
import Home from './pages/Home';
// import ReportStore from './pages/reports-store';
// import Reports from './pages/reports';
// import AboutUs from './pages/About-us';
// import OurClient from './pages/Our-Client';
// import Faq from './pages/Faq';  // Ensure this is the correct path for Faq
// import ContactUs from './pages/Contact-us';  // Import the ContactUs component correctly
// import PrivacyPolicy from './pages/Privacy-Policy';
// import Careerdetails from './pages/Career-details';
// import Career from './pages/Career';
// import Checkout from './pages/Checkout';
// import SampleRequest from './pages/SampleRequest';
// import IndustryReports from './pages/Industry-reports';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar />  */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/reports-store" element={<ReportStore />} />
            <Route path="/reports/:url" element={<Reports />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-client" element={<OurClient />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Career-details" element={<Careerdetails />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/SampleRequest" element={<SampleRequest />} />
            <Route path="/Industry-reports/:slug" element={<IndustryReports />} /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
