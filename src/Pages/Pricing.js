import React from "react";

const pricingPlans = [
  {
    title: "Website",
    price: "₹10,000",
    billing: "One-time payment",
    features: [
      "Expert Developer",
      "Static Website",
      "Domain Included",
      "Hosting/SSL",
      "Contact Form",
      "Google Maps",
    ],
    color: "primary",
  },
  {
    title: "Mobile Apps",
    price: "₹25,000",
    billing: "One-time payment",
    features: [
      "Custom App Design",
      "Push Notifications",
      "Online Appointment/Booking System",
      "In-app Chat Support",
      "Social Media Integration",
    ],
    color: "success",
  },
  {
    title: "Digital Marketing",
    price: "₹12,000",
    billing: "Per month",
    features: [
      "Google Ads Setup",
      "Social Media Marketing",
      "Daily 5+ Leads",
      "Brand Awareness",
      "Fully Responsive",
    ],
    color: "warning",
  },
];

const Pricing = () => {
  return (
    <div
      className="bg-dark text-white py-5"
      style={{
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-warning mb-3">Our Pricing</h2>
        <p className="text-center mb-5">
          We offer competitive pricing for our premium services
        </p>

        <div className="row g-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-12 col-md-4">
              <div
                className={`bg-${plan.color} bg-opacity-10 text-white rounded p-4 shadow-lg h-100`}
                style={{
                  borderTop: `5px solid var(--bs-${plan.color})`,
                  transition: "transform 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h4 className={`text-${plan.color}`}>{plan.title}</h4>
                <h3 className="fw-bold">{plan.price}</h3>
                <p className="text-light">{plan.billing}</p>
                <ul className="list-unstyled mt-3 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="bi bi-check-circle-fill me-2 text-success"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`btn btn-${plan.color} w-100`}>
                  <a
                    href="https://wa.me/9390627367" // replace with your WhatsApp number
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-${plan.color} w-100 d-flex align-items-center justify-content-center gap-2`}
                  >
                    <i className="bi bi-whatsapp"></i>
                    Get Started
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
