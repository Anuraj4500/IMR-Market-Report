import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => (
  <section className="thank-you-page">
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h2>Thank You!</h2>
      <p>Your message has been successfully sent. We will get back to you shortly.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go to Homepage
      </Link>
    </div>
  </section>
);

export default ThankYou;
