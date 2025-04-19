import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Contact.css"; // Assuming you have a CSS file for custom styles
const Contact = () => {
  return (
    <div className="bg-dark text-white py-5" id="contact">
      <div className="container">
        <h2 className="text-center text-warning mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Get in touch with our team for any inquiries
        </p>

        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-md-5">
            <h4 className="mb-3">Contact Information</h4>
            <p>
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>{" "}
              Hyderabad, Telangana, India
            </p>
            <p>
              <i className="bi bi-telephone-fill text-warning me-2"></i> +91
              9390627367
            </p>
            <p>
              <i className="bi bi-telephone-fill text-warning me-2"></i> +91
              9676529281
            </p>
            <p>
              <i className="bi bi-envelope-fill text-warning me-2"></i>{" "}
              contact@saikiran.com
            </p>

            <h5 className="mt-4">Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <h4 className="mb-3">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control bg-secondary text-white"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control bg-secondary text-white"
                  id="message"
                  rows="5"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
