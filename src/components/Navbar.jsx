import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <NavLink to="/" className="logo">
            <img src="/images/Logo_small.png" alt="BBioX Logo" className="logo-img" />
          </NavLink>
          <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => {
            document.querySelector('.nav-links').classList.toggle('active');
            document.querySelector('.mobile-menu-btn').classList.toggle('active');
          }}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
            <NavLink to="/people" className={({ isActive }) => isActive ? "active" : undefined}>People</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : undefined}>Projects</NavLink>
            <NavLink to="/publications" className={({ isActive }) => isActive ? "active" : undefined}>Publications</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
} 