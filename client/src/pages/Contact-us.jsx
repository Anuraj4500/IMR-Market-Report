import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const ContactUs = () => {
  const breadcrumbItems = [
    { label: 'Contact Us' }
  ];

  // Declare formData using useState hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    company: '',
    designation: '',
    message: '',
    usercaptcha: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can now send the formData to an API or do further actions.
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
            {/* Static content for blocked user message */}
            <p>Your Request is being processed. Our Executive will be with you soon! If any urgent requirement - Please mail us at mentioned contact details. Thank you for your patience.</p>

            {/* Contact Form */}
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
    {/* Include the rest of the countries here */}
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
              <div className="req">
                <label htmlFor="website">Leave blank</label>
                <input type="text" name="website" />
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
            <div className="card">
              <div className="card-header style-card-header">
                Need Assistance?
              </div>
              <div className="card-body">
                <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                  <li>
                    <a href="tel:+918180096367">
                      <i className="bx bx-phone"></i>&nbsp;+91-8180096367
                    </a>
                    <hr />
                  </li>

                  <li>
                    <a href="mailto:sales@imrmarketreports.com">
                      <i className="bx bx-envelope"></i>&nbsp;sales@imrmarketreports.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
