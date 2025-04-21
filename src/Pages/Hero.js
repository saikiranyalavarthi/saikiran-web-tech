import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg"; // Adjust the path as needed

const Hero = () => {
  return (
    <div className="bg-black text-center text-white d-flex flex-column justify-content-center align-items-center vh-100 px-3">
      <img
        src={logo}
        alt="saikiran-web-Tech Logo"
        className="mb-4"
        style={{
          maxWidth: "400px",
          borderRadius: "50%",
          backgroundColor: "black",
        }}
      />

      {/* Heading */}
      <h1
        className="fw-bold mb-3"
        style={{
          color: "greenyellow",
          fontFamily: "Georgia, serif",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Shadow effect on text
        }}
      >
        SaiKiran Web Tech Services & Development
      </h1>

      {/* Subtext */}
      <p className="fs-5  mb-4" style={{ color: "pink" }}>
        Design. Develop. Deliver. <span className="typing">reality</span>
      </p>

      {/* Buttons */}
      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <Link
          to="/services"
          className="btn btn-warning px-4 fw-semibold rounded-pill"
        >
          Our Services
        </Link>
        <Link
          to="/contact"
          className="btn btn-outline-warning px-4 fw-semibold rounded-pill"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
