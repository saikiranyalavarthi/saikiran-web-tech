import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, email, subject, message } = formData;

    const whatsappMessage = `Hello, I'm ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const phoneNumber = "919390627367"; // Your WhatsApp number without + or spaces
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Optionally reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="bg-dark text-white py-5" id="contact">
      <div className="container">
        <h2 className="text-center text-warning mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Get in touch with our team on WhatsApp
        </p>

        <div className="row g-5">
          <div className="col-md-5">
            <h4 className="mb-3">Contact Information</h4>
            <p>
              <i className="bi bi-geo-alt-fill text-warning me-2"></i>
              Hyderabad, Telangana, India
            </p>
            <p>
              <i className="bi bi-telephone-fill text-warning me-2"></i>
              +91 9390627367
            </p>
            <p>
              <i className="bi bi-envelope-fill text-warning me-2"></i>
              yalavarthisaikiran3482@gmail.com
            </p>

            <h5 className="mt-4">Follow Us</h5>
            <div className="d-flex gap-3 mt-2">
              <a
                href="https://wa.me/919390627367"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white fs-4"
              >
                <FaWhatsapp />
              </a>
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

          <div className="col-md-7">
            <h4 className="mb-3">Send Us a Message on WhatsApp</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control bg-secondary text-white"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control bg-secondary text-white"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Type your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Redirecting..." : "Send via WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
