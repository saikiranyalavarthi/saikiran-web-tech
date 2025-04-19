import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file for custom styles
import logo from "../Pages/logo.jpg"; // Adjust the path as needed

const Navbar = () => {
  return (
    //
    <nav
      className="navbar navbar-expand-lg navbar-dark px-4"
      style={{
        background: "linear-gradient(to right,rgb(60, 62, 64),rgb(20, 24, 46))",
      }}
    >
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          alt="Logo"
          height="70"
          style={{ borderRadius: "50%" }}
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/works"
            >
              Works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white bg-transparent px-3 py-2 rounded hover-bg-warning"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
