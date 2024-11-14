import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import ReportStore from './pages/reports-store';
import Reports from './pages/reports';
import AboutUs from './pages/About-us';
import OurClient from './pages/Our-Client';
import Faq from './pages/Faq';  // Ensure this is the correct path for Faq
import ContactUs from './pages/Contact-us';  // Import the ContactUs component correctly
import PrivacyPolicy from './pages/Privacy-Policy';
import Careerdetails from './pages/Career-details';
import Career from './pages/Career';
import Checkout from './pages/Checkout';
import SampleRequest from './pages/SampleRequest';
import './App.css';
import './App1.css';
import './report-style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Fixed Navbar */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports-store" element={<ReportStore />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-client" element={<OurClient />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} /> 
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/Career-details" element={<Careerdetails />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/SampleRequest" element={<SampleRequest />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
