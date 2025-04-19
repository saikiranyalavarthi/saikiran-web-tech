// import React from "react";
// import aboutImg from "./img.jpg"; // Make sure this path matches your actual image
// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <div
//       className="container-fluid bg-black text-white py-5"
//       style={{
//         background:
//           "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
//       }}
//     >
//       <div className="container">
//         <div className="row align-items-center g-5 flex-column flex-lg-row">
//           {/* Left Image */}
//           <div className="col-lg-6 text-center">
//             <img
//               src={aboutImg}
//               alt="SEO Services"
//               className="img-fluid rounded"
//               style={{ maxHeight: "500px", objectFit: "cover" }}
//             />
//           </div>

//           {/* Right Text */}
//           <div className="col-lg-6">
//             <h2
//               className="text-warning fw-bold mb-3"
//               style={{
//                 borderBottom: "2px solid gold",
//                 display: "inline-block",
//               }}
//             >
//               About Us
//             </h2>
//             <p className="mb-4">
//               We continue to offer customized services tailored to your
//               company's requirements. Our dedicated team of skilled developers
//               and designers ensures that you stand out from your competitors.
//             </p>

//             <ul className="list-unstyled">
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-warning me-2"></i>
//                 UI/UX, Web & App development
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-warning me-2"></i>
//                 Google Maps – Location & 360 Photos, Reviews
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-warning me-2"></i>
//                 Graphic Designing, SEO & SMM
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-warning me-2"></i>
//                 Digital Marketing, Google Ads, Meta Ads
//               </li>
//             </ul>
//             <Link to="/contact" className="text-decoration-none">
//               <button className="btn btn-warning fw-semibold rounded-pill px-4 mt-3">
//                 Get In Touch
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import aboutImg from "./img.jpg"; // Make sure this path matches your actual image
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{
        background: "linear-gradient(45deg, #4e4376, #2b5876)",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-lg-6 text-center">
            <img
              src={aboutImg}
              alt="Digital Solutions"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </div>

          {/* Right Text */}
          <div className="col-lg-6">
            <h2
              className="text-info fw-bold mb-3"
              style={{
                borderBottom: "3px solid #00bcd4",
                display: "inline-block",
              }}
            >
              About Us
            </h2>
            <p className="mb-4">
              At SaiKiran Web Tech services & Development, we are committed to
              empowering businesses with innovative digital solutions. Our
              expertise lies in crafting custom web and mobile applications that
              cater to your specific business needs. We don’t just build
              software; we build long-term partnerships with our clients,
              helping them succeed in an ever-changing digital world.
            </p>

            <p className="mb-4">
              Our dedicated team of skilled developers, designers, and digital
              marketing strategists work tirelessly to deliver impactful
              solutions that drive business growth. Whether you need a
              captivating website, an engaging mobile app, or a comprehensive
              digital marketing plan, we’ve got you covered. Our client-centric
              approach ensures that every project we undertake is customized to
              align with your business goals and objectives.
            </p>

            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                Custom Web & Mobile App Development
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                Search Engine Optimization (SEO) & Social Media Marketing (SMM)
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                Strategic Branding & Creative Marketing Campaigns
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                E-commerce Solutions & Payment Gateway Integration
              </li>
              <li className="mb-2">
                <i className="bi bi-check-circle-fill text-info me-2"></i>
                Data Analytics, Reporting, and Insights
              </li>
            </ul>

            <Link to="/services" className="text-decoration-none">
              <button className="btn btn-info fw-semibold rounded-pill px-4 mt-3">
                Explore Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
