import React from "react";

export default function Contact() {
  return (
    <main>
      <div className="container">
        <div className="section grid">
          <div className="col-6 card-pro contact-info">
            <h3 className="h2">Get in Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-user"></i>
                <p>Nazli Tumer</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Mekelweg 2, 2628 CD Delft</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>n.tumer-1@tudelft.nl</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 