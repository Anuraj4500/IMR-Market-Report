import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import AssistanceCard from '../components/Assistance-Card';

const ContactUs = () => {
  const breadcrumbItems = [
    { label: 'Contact Us' }
  ];

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    designation: '',
    message: '',
    usercaptcha: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response Status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      setFormData({
        id: '',
        name: '',
        email: '',
        phone: '',
        country: '',
        company: '',
        designation: '',
        message: '',
        usercaptcha: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="inner-page">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mt-4">
        <div className="row">
          <div className="section-title">
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              In order to establish communication with our organization, kindly complete the form provided below. This will enable our dedicated representative to promptly reach out to you and address your specific needs and inquiries.
            </p>
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control mb-3"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <select
                    name="country"
                    className="form-control mb-3"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose Country</option>
                    <option value="AFG">Afghanistan</option>
                    <option value="ALA">Åland Islands</option>
                    <option value="ALB">Albania</option>
                    <option value="DZA">Algeria</option>
                    <option value="ASM">American Samoa</option>
                    <option value="AND">Andorra</option>
                    <option value="AGO">Angola</option>
                    <option value="AIA">Anguilla</option>
                    <option value="ATA">Antarctica</option>
                    <option value="ATG">Antigua and Barbuda</option>
                    <option value="ARG">Argentina</option>
                    <option value="ARM">Armenia</option>
                    <option value="ABW">Aruba</option>
                    <option value="AUS">Australia</option>
                    <option value="AUT">Austria</option>
                    <option value="AZE">Azerbaijan</option>
                    <option value="ZWE">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="company"
                    className="form-control mb-3"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="designation"
                    className="form-control mb-3"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control mb-3"
                  rows="4"
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <input type="hidden" name="token" value="your-captcha-token-placeholder" />
              <ul className="request-privacy">
                <li>We do not share your details. Read more about our Privacy Policies </li>
              </ul>

              <div>
                <b style={{ background: '#e9e9e9', fontSize: '16pt', padding: '5px', fontWeight: 'bold', float: 'left' }}>
                  1234
                </b>
                <input
                  style={{ width: '50%', padding: '5px' }}
                  type="text"
                  placeholder="Enter Captcha"
                  name="usercaptcha"
                  value={formData.usercaptcha}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div className="text-center">
                <button type="submit" className="btn request-btn">
                  <i className="bx bx-send"></i>&nbsp;Submit Contact Request
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-header style-card-header">
                OUR OFFICES
              </div>
              <div className="card-body">
                <h5>IMR Market Reports</h5>
                <p>
                  <strong>APAC Office:</strong> Office No. 403, Saudamini Commercial Complex, Kothrud, Pune, India 411038
                </p>
              </div>
            </div>
            <br />
            <AssistanceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
