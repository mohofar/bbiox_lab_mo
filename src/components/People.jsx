import React from "react";

export default function People() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h2 className="h1">Our Team</h2>
          <div className="pi-section card-pro" style={{ marginBottom: "3rem" }}>
            <h3>Principal Investigator</h3>
            <div className="team-member pi card-pro">
              <img src="/images/Nazli.jpg" alt="Dr. Nazli Tumer" className="team-member-image" style={{ background: "#fff" }} />
              <div className="team-info">
                <h3>Dr. Ir. Nazli Tumer</h3>
                <p className="role">Principal Investigator</p>
                <p className="title">Delft University of Technology & Guest Scientific Researcher - Department of General Practice & Orthopedics and Sports Medicine, Erasmus MC</p>
                <p className="research">Research: Developmental Skeletal Biomechanics</p>
                <div className="expertise-tags">
                  <span className="expertise-tag">Biomechanics</span>
                  <span className="expertise-tag">Skeletal Growth & Development</span>
                  <span className="expertise-tag">Medical Imaging</span>
                  <span className="expertise-tag">Machine Learning</span>
                  <span className="expertise-tag">Computational Modeling</span>
                  <span className="expertise-tag">Implant Design</span>
                </div>
              </div>
            </div>
          </div>
          {/* Add more team members and sections as needed, following the same structure */}
        </div>
      </div>
    </main>
  );
} 