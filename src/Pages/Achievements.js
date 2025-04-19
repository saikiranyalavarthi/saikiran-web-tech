import React from "react";

function Achievements() {
  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <h2 className="text-center text-warning mb-4">Our Achievements</h2>
        <p className="text-center mb-5">
          We take pride in our numbers and the satisfaction we've delivered
        </p>
        <div className="row text-center">
          {/* Photos Taken */}
          <div className="col-md-3 mb-4">
            <div className="bg-secondary p-4 rounded shadow-lg">
              <h3 className="text-warning mb-2">626</h3>
              <p className="text-light">Photos Taken</p>
            </div>
          </div>

          {/* Happy Clients */}
          <div className="col-md-3 mb-4">
            <div className="bg-secondary p-4 rounded shadow-lg">
              <h3 className="text-warning mb-2">568</h3>
              <p className="text-light">Happy Clients</p>
            </div>
          </div>

          {/* Views */}
          <div className="col-md-3 mb-4">
            <div className="bg-secondary p-4 rounded shadow-lg">
              <h3 className="text-warning mb-2">1,479,000</h3>
              <p className="text-light">Views</p>
            </div>
          </div>

          {/* Years Experience */}
          <div className="col-md-3 mb-4">
            <div className="bg-secondary p-4 rounded shadow-lg">
              <h3 className="text-warning mb-2">7</h3>
              <p className="text-light">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
