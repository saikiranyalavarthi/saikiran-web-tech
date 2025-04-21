import React from "react";

const services = [
  {
    icon: "bi-camera-fill",
    title: "Portraits & Landscapes",
    desc: "Capture your best moments with our professional photography services. Whether it's stunning outdoor landscapes or elegant indoor portraits, we deliver high-quality visuals that leave a lasting impression.",
  },
  {
    icon: "bi-camera-video-fill",
    title: "Logo Design & Animation",
    desc: "Stand out in the market with creative logo designs and eye-catching animations. From concept to execution, we bring your brand’s personality to life through motion graphics and iconic visuals.",
  },
  {
    icon: "bi-hdd-stack-fill",
    title: "IT Hardware Services",
    desc: "Reliable installation, maintenance, and repair of all major IT hardware components. Whether it’s setting up networks, troubleshooting PCs, or upgrading systems—we’ve got your tech covered.",
  },
  {
    icon: "bi-geo-alt-fill",
    title: "Google Maps Services",
    desc: "Enhance your business visibility with our Google Maps services. We offer location setup, business verification, 360° virtual tours, and map optimization to help customers find you faster.",
  },
  {
    icon: "bi-code-slash",
    title: "Web & App Development",
    desc: "Get custom-built websites and mobile apps that are fast, secure, and tailored to your needs. From e-commerce platforms to business portals, we deliver scalable digital solutions for all industries.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Digital Marketing",
    desc: "Boost your online presence with our full-suite digital marketing strategies. We offer SEO, social media marketing, paid ads, and content creation to help you reach the right audience effectively.",
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
