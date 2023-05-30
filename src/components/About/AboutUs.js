import React from 'react';
import './AboutUs.scss';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-description">
          Form Filling Services is a team of experienced professionals who provide high-quality form filling services for various jobs. We understand the importance of accuracy and efficiency when it comes to form filling, and we strive to provide the best possible service to our clients.
        </p>
        <p className="about-us-description">
          Our team consists of experts in various fields, including data entry, typing, and form design. We work closely with our clients to understand their specific needs and requirements, and we tailor our services to meet those needs.
        </p>
        <p className="about-us-description">
          Whether you need help filling out job applications, tax forms, or any other type of form, we are here to help. Our goal is to make the form filling process as smooth and stress-free as possible for our clients.
        </p>

      </div>
      <Footer />
    </>

  );
}

export default AboutUs;
