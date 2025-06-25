import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/919390627367?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2 className="footer-logo">Saikiran Web Tech</h2>
        <p className="footer-description">
          Modern websites, apps & digital marketing to power your business.
        </p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Contact Info</h3>
        <p>Hyderabad, Telangana, India</p>
        <p>+91 9390627367</p>
        <p>yalavarthisaikiran3482@gmail.com</p>
      </div>

      <div className="footer-section">
        <h3 className="footer-title">Quick Contact</h3>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="3" required />
          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
