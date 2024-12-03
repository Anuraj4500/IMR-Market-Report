import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import AssistanceCard from '../components/Assistance-Card';

const ContactUs = () => {
  const breadcrumbItems = [{ label: 'Contact Us' }];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    // company: '',
    designation: '',
    message: '',
    usercaptcha: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/contactus';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Submission failed.');
      }

      alert('Form submitted successfully!');
      setFormData({
        ...formData,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
            <h2 style="color: #0056b3; text-align: center;">New Contact Form Submission</h2>
            <p style="font-size: 16px;">You have received a new contact form submission. Below are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Name</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.name}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Email</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.email}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Phone</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.phone}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Country</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.country}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Company</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.company}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Designation</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.designation}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 5px; border: 1px solid #ddd;">Message</td>
                    <td style="padding: 5px; border: 1px solid #ddd;">${formData.message || 'N/A'}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; font-size: 14px; color: #555;">
                <i>This is an automated message. Please do not reply to this email.</i>
            </p>
        </div>
    `,
      });

      window.location.href = '/thank-you';
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="inner-page">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="section-title">
            <h2>
              Contact <span>Us</span>
            </h2>
            <p>
              Kindly complete the form provided below. This will enable our representative to reach out to you.
            </p>
          </div>
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form">
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
                    <option value="USA">United States</option>
                    <option value="IND">India</option>
                    <option value="CAN">Canada</option>
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
              <div className="form-group">
                <label>Enter Captcha: 1234</label>
                <input
                  type="text"
                  className="form-control"
                  name="usercaptcha"
                  value={formData.usercaptcha}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn request-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Contact Request'}
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header style-card-header">OUR OFFICES</div>
              <div className="card-body">
                <h6><b>IMR Market Reports</b></h6>
                <p>
                  <strong>APAC Office:</strong> Office No. 403, Saudamini Commercial Complex, Kothrud, Pune, India 411038
                </p>
              </div>
            </div>
            <AssistanceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
