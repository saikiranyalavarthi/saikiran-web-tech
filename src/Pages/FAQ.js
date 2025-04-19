import React from "react";
import faqImg from "./img3.jpg"; // Replace with your actual image path

const FAQ = () => {
  return (
    <div
      className="bg-dark text-white py-5"
      style={{
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-warning mb-3">FAQ</h2>
        <p className="text-center mb-5">
          Frequently asked questions about our services
        </p>

        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={faqImg}
              alt="FAQ Illustration"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right side accordion */}
          <div className="col-md-6">
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item bg-secondary text-white">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button bg-secondary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How to order multiple services at once?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    You can simply contact us via WhatsApp or Email and mention
                    the list of services you'd like to avail. We'll create a
                    custom package for you.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-secondary text-white mt-3">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed bg-secondary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can I use PayPal or any app to pay for your services?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, we accept payments through PayPal, Google Pay, PhonePe,
                    and other UPI-compatible apps.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-secondary text-white mt-3">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed bg-secondary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is there any extra tax like GST in your services?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    No extra tax is charged. All pricing mentioned is inclusive,
                    unless otherwise specified for large-scale services.
                  </div>
                </div>
              </div>

              <div className="accordion-item bg-secondary text-white mt-3">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed bg-secondary text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How long does your services take time to complete the tasks?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Depending on the service type, most tasks are completed
                    within 3–7 working days. Larger projects may take up to 2
                    weeks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
