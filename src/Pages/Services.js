import React from "react";

const services = [
  {
    icon: "bi-camera-fill",
    title: "Portraits & Landscapes",
    desc: "Professional photography services for portraits, landscapes, and commercial needs.",
  },
  {
    icon: "bi-camera-video-fill",
    title: "Logo Design & Animation",
    desc: "Creative logo designs and engaging animations to make your brand stand out.",
  },
  {
    icon: "bi-hdd-stack-fill",
    title: "IT Hardware Services",
    desc: "Professional installation and repair services for all your IT hardware needs.",
  },
  {
    icon: "bi-geo-alt-fill",
    title: "Google Maps Services",
    desc: "Business location setup, 360° photos, and optimization for Google Maps.",
  },
  {
    icon: "bi-code-slash",
    title: "Web & App Development",
    desc: "Custom websites and mobile applications tailored to your business requirements.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing solutions to grow your online presence.",
  },
];

const Services = () => {
  return (
    <div
      className="container-fluid bg-black text-white py-5"
      style={{
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
      }}
    >
      <div className="container">
        <center>
          <h1 style={{ color: "yellow" }}>Our Services</h1>
          <p>
            We provide premium quality services tailored to your business needs
          </p>
        </center>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              style={{ transition: "transform 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="p-4 bg-dark rounded border border-dark h-100 shadow-lg">
                <div className="mb-3">
                  <i className={`${service.icon} fs-2 text-warning`}></i>
                </div>
                <h5 className="fw-bold text-white">{service.title}</h5>
                <p className="text-light">{service.desc}</p>
                <button className="btn btn-outline-warning btn-sm rounded-pill">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
