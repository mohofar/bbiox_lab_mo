import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <h3>BBioX Research Group</h3>
            <p>Department of Biomechanical Engineering</p>
            <p>Faculty of Mechanical Engineering</p>
            <p>Delft University of Technology</p>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><NavLink to="/people">Our Team</NavLink></li>
              <li><NavLink to="/projects">Research Projects</NavLink></li>
              <li><NavLink to="/publications">Publications</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 BBioX Research Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 