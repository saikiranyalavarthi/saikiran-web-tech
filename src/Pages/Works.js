import React from "react";

function Works() {
  return (
    <div
      className="bg-dark text-white py-5"
      style={{
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-warning mb-3">
          Web Design & Website Development
        </h2>
        <p className="text-center mb-4">
          We provide cutting-edge web design and development services that cater
          to your business's unique needs. From custom websites to
          mobile-friendly designs, we create user-centric experiences.
        </p>

        <div className="row">
          {/* Web Design Section */}
          <div className="col-md-6 mb-4">
            <div
              className="bg-secondary p-4 rounded shadow-lg"
              style={{ boxShadow: "0 4px 8px rgba(255, 165, 0, 0.5)" }}
            >
              <h3 className="text-warning mb-3">Web Design (wordpress)</h3>
              <p>
                Our design team creates stunning, responsive, and intuitive
                designs that prioritize user experience and accessibility. We
                believe in building beautiful websites that engage users and
                effectively represent your brand online.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Responsive Web Design
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  User-Centric Layouts
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Custom UI/UX Design
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Branding and Graphic Design
                </li>
              </ul>
            </div>
          </div>
          {/* App Development Section */}
          <div className="col-md-6 mb-4">
            <div
              className="bg-secondary p-4 rounded shadow-lg"
              style={{ boxShadow: "0 4px 8px rgba(0, 191, 255, 0.5)" }}
            >
              <h3 className="text-warning mb-3">
                App Development (iOS / Android)
              </h3>
              <p>
                We craft powerful mobile applications that are fast, intuitive,
                and built to scale. Whether it's for iOS, Android, or both, we
                deliver sleek and functional apps that enhance user engagement
                and business growth.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Native & Cross-Platform Apps (React Native, Flutter)
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Custom Mobile App Development
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Backend Integration & API Services
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  App Store Deployment & Support
                </li>
              </ul>
            </div>
          </div>
          {/* SEO & Digital Marketing Section */}
          <div className="col-md-6 mb-4">
            <div
              className="bg-secondary p-4 rounded shadow-lg"
              style={{ boxShadow: "0 4px 8px rgba(64, 65, 156, 0.73)" }}
            >
              <h3 className="text-warning mb-3">SEO & Digital Marketing</h3>
              <p>
                Boost your online visibility and reach your target audience
                effectively with our SEO and digital marketing services. We help
                businesses grow through result-driven strategies that include
                search engine optimization,content marketing,and social media
                campaigns.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  On-Page & Off-Page SEO Optimization
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Keyword Research & Content Strategy
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Google Ads & Pay-Per-Click (PPC) Campaigns
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Social Media Management (Facebook, Instagram, LinkedIn)
                </li>
              </ul>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="col-md-6">
            <div
              className="bg-secondary p-4 rounded shadow-lg"
              style={{ boxShadow: "0 4px 8px rgba(255, 165, 0, 0.5)" }}
            >
              <h3 className="text-warning mb-3">Website Development</h3>
              <p>
                We offer comprehensive web development services using the latest
                technologies to build dynamic, scalable, and secure websites.
                From front-end to back-end development, we ensure a seamless
                user experience and performance.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Frontend Development (React, Angular, Vue.js)
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Backend Development (Node.js, PHP, Django)
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Custom Web Applications
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Content Management Systems (WordPress, Drupal)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
