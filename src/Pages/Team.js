import React from "react";

const teamMembers = [
  {
    name: "Sai Kiran",
    title: "Founder & Content Creator",
    desc: "Visionary leader with 7+ years in digital solutions and business strategy.",
  },
  {
    name: "kiran",
    title: "Co-Founder & Social Media Specialist",
    desc: "Design expert specializing in UI/UX and brand identity development.",
  },
  {
    name: "Shanumukha",
    title: "Lead Developer",
    desc: "Full-stack developer with expertise in web and mobile applications.",
  },
];

function Team() {
  return (
    <div
      className="bg-dark text-white py-5"
      style={{
        background:
          "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #000000)",
      }}
    >
      <div className="container">
        <h2 className="text-center text-warning mb-3">Meet Our Team</h2>
        <p className="text-center mb-5">
          The creative minds behind <strong>Al-Ehsan Media & Tech</strong>
        </p>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-12 col-md-4">
              <div
                className="p-4 bg-secondary text-white rounded shadow-lg h-100"
                style={{ transition: "transform 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h5 className="text-warning">{member.name}</h5>
                <p className="fw-semibold mb-2">{member.title}</p>
                <p className="text-light">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
