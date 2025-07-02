import React from "react";

export default function Publications() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h2 className="h1">Publications</h2>
          <div className="publications-list">
            {/* Example publication card */}
            <div className="pub-card card-pro">
              <div className="pub-image" style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src="https://via.placeholder.com/220x220?text=Image" alt="Mandibular Cage" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "1rem", background: "#fff" }} />
              </div>
              <div className="pub-content">
                <div className="pub-title">Biomechanical evaluation of additively manufactured patient-specific mandibular cage implants designed with a semi-automated workflow: A cadaveric and retrospective case study</div>
                <div className="pub-desc">A study on the biomechanical evaluation of patient-specific mandibular cage implants, combining digital workflow and experimental validation.</div>
                <div className="pub-links">
                  <a className="pub-link" href="https://pubmed.ncbi.nlm.nih.gov/37678107/" target="_blank" title="PubMed" rel="noopener noreferrer"><i className="fas fa-file-alt"></i>PubMed</a>
                </div>
              </div>
            </div>
            {/* Add more publication cards as needed */}
            <a className="more-pubs-link" href="#">More publications…</a>
          </div>
        </div>
      </div>
    </main>
  );
} 