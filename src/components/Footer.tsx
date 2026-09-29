import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-bar">
              <div className="accent" />
              <span>SRI MARUTHI</span>
            </div>
            <p>
              Singapore-based multidisciplinary civil engineering, industrial plant maintenance,
              structural fabrication, and marine operations specialist delivering safety-certified
              turnkey solutions.
            </p>
            <div className="footer-uen">
              <span className="eyebrow">Registered Entity</span>
              <p className="value">UEN: 202333665C</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-section">
            <h3>Quick Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Company</Link></li>
              <li><Link to="/services">Services Matrix</Link></li>
              <li><Link to="/projects">Project Portfolio</Link></li>
              <li><Link to="/contact">Tender Enquiries</Link></li>
            </ul>
          </div>

          {/* Core Capabilities */}
          <div className="footer-section">
            <h3>Core Capabilities</h3>
            <ul className="footer-capabilities">
              <li>Structural Steel Fabrication &amp; Erection</li>
              <li>Process Plant Piping &amp; Equipment Overhaul</li>
              <li>Marine Vessel Repairs &amp; Offshore Outfitting</li>
              <li>Civil Substructure &amp; Ground Engineering</li>
              <li>Corrosion Control, Blasting &amp; Painting</li>
              <li>Mechanical Turnaround Maintenance</li>
            </ul>
          </div>

          {/* Office & Yard */}
          <div className="footer-section">
            <h3>Office &amp; Yard</h3>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <strong>Pioneer Junction Office</strong>
                <span>3 Soon Lee Street, #04-13<br />Pioneer Junction, Singapore 627606</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">mail</span>
              <a href="mailto:admin@sm-eng.co" style={{ color: 'inherit', textDecoration: 'none' }}>admin@sm-eng.co</a>
            </div>
            <div className="footer-contact-item">
              <span className="material-symbols-outlined">schedule</span>
              <span>Mon - Sat: 08:00 - 18:00 SGT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2026 Sri Maruthi Engineering Pte Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Safety &amp; Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
