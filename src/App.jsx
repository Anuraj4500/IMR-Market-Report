import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer'; // Import Footer component
import Home from './pages/Home';
import ReportStore from './pages/reports-store'; // Ensure this matches the export
import Reports from './pages/reports'; // Ensure this matches the export
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
            {/* Add other routes as needed */}
          </Routes>
        </div>
        {/* <Footer /> Fixed Footer */}
      </div>
    </Router>
  );
}

export default App;
