import React from "react";

export default function MainPage() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <a href="docs/index.html" className="logo">
              <img src="docs/images/Logo_small.png" alt="BBioX Logo" className="logo-img" />
            </a>
            <button className="mobile-menu-btn" aria-label="Toggle menu">
              <i className="fas fa-bars"></i>
            </button>
            <div className="nav-links">
              <a href="docs/index.html" className="active">Home</a>
              <a href="docs/people.html">People</a>
              <a href="docs/projects.html">Projects</a>
              <a href="docs/publications.html">Publications</a>
              <a href="docs/contact.html">Contact</a>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero-pro">
          <div className="hero-bg-pro"></div>
          <div className="hero-content-pro" style={{ marginTop: 64 }}>
            <img src="docs/images/Logo_wide.png" alt="BBioX Research Group Logo" className="hero-logo-pro" />
            <div className="hero-tagline-pro">Advancing Biomechanics & Skeletal Research</div>
            <div className="scroll-indicator-pro" onClick={() => {
              document.querySelector('.container')?.scrollIntoView({ behavior: 'smooth' });
            }}><i className="fas fa-chevron-down"></i></div>
          </div>
        </section>
        <div className="container">
          <div className="section pro-grid">
            <div className="pro-main card-pro">
              <div className="about-content">
                <div className="intro-text body">
                  <p>We are a collaborative research group led by Dr.ir. Nazli Tumer, Assistant Professor in the Department of Biomechanical Engineering at the Faculty of Mechanical Engineering, Delft University of Technology.</p>
                  <p>As part of the Section of Biomaterials and Tissue Biomechanics, our group is passionate about advancing research where science, engineering, and health meet.</p>
                  <p>We study how bones and cartilage grow, adapt, and sometimes fail – asking questions like: How does bone shape influence skeletal diseases? How does the skeleton change over time? And how do mechanical forces affect tissue behavior?</p>
                  <p>By blending computational modeling, data-driven analysis, medical image processing, and experimental methods, we work to better understand skeletal development and related disorders.</p>
                  <p>We collaborate closely with hospitals, research institutes, and other universities, with the belief that shared expertise leads to greater impact. We are always open to new collaborations. Whether you are a student, researcher, or clinician, we welcome the opportunity to connect and collaborate in advancing knowledge and improving care.</p>
                </div>
                <div className="section-divider"></div>
                <div className="research-focus">
                  <h2 className="h2">Our Central Question</h2>
                  <div className="mission-box card-pro" style={{ marginBottom: 0 }}>
                    <p className="highlight" style={{ color: '#000' }}>How do bones and cartilage grow, adapt, and sometimes fail?</p>
                  </div>
                  <p>We explore how bone shape is linked to skeletal diseases, how the skeleton develops over time, and how mechanical forces influence the behavior of both bone and cartilage.</p>
                </div>
                <div className="section-divider"></div>
                <div className="mission-section">
                  <h2 className="h2">Our Mission</h2>
                  <div className="mission-box card-pro">
                    <p>Promote healthy skeletal development, prevent skeletal disorders, and advance effective treatments for those affected.</p>
                  </div>
                </div>
                <div className="section-divider"></div>
                <div className="approach-section">
                  <h2 className="h2">Our Approach</h2>
                  <div className="approach-grid-pro">
                    <div className="approach-item-pro"><i className="fas fa-chart-line"></i><span>Data-Driven Analysis</span></div>
                    <div className="approach-item-pro"><i className="fas fa-image"></i><span>Medical Image Processing</span></div>
                    <div className="approach-item-pro"><i className="fas fa-laptop-code"></i><span>Computational Modeling</span></div>
                    <div className="approach-item-pro"><i className="fas fa-microscope"></i><span>Experimental Biomechanics</span></div>
                  </div>
                </div>
              </div>
            </div>
            <aside className="pro-sidebar card-pro news-sidebar-pro">
              <div className="news-content-pro">
                <h2>Latest Updates</h2>
                <div className="news-list-pro">
                  <article className="news-item-pro">
                    <div className="news-header-pro">
                      <span className="news-date">July 2025</span>
                      <span className="news-tag">Course</span>
                    </div>
                    <h3>ESB 2025 Pre-course on AI-based Shape Representation</h3>
                    <p>Join us on July 6th in Zurich at ESB 2025 for a hands-on pre-course exploring shape representation, deep-learning techniques, and version control. <a href="https://github.com/BBioX/esb25_workshop_bbiox" target="_blank" rel="noopener noreferrer">View workshop materials on GitHub</a>.</p>
                  </article>
                  <article className="news-item-pro">
                    <div className="news-header-pro">
                      <span className="news-date">April 2025</span>
                      <span className="news-tag">Publication</span>
                    </div>
                    <h3>Review Article - Shape Modeling of Longitudinal Medical Images: From Diffeomorphic Metric Mapping to Deep Learning</h3>
                    <p>Understanding how living tissues grow and change is key to advancing diagnostics and treatment. Our latest review explores methods for modeling longitudinal shape change including both traditional and deep learning-based approaches and highlights future research directions in this evolving field.</p>
                  </article>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
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
                <li><a href="docs/people.html">Our Team</a></li>
                <li><a href="docs/projects.html">Research Projects</a></li>
                <li><a href="docs/publications.html">Publications</a></li>
                <li><a href="docs/contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 BBioX Research Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
} 