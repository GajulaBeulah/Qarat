import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          
          {/* Columns */}
          <div className="footer-columns">
            
            {/* Brand Column */}
            <div className="footer-col brand-col">
              <h2 className="footer-brand">QARAT</h2>
              <h3 className="footer-brand-subtitle">Interior Decorator</h3>
              <p className="footer-brand-desc">
                Interior work and material supply solutions for homes, offices and commercial spaces in Lucknow.
              </p>
            </div>
            
            <div className="footer-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/get-quote">Get Quote</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Interior Work</h3>
              <ul className="footer-links">
                <li><Link to="/interior-work/ceiling-work">Ceiling Work</Link></li>
                <li><Link to="/interior-work/wall-decorative-work">Wall & Decorative</Link></li>
                <li><Link to="/interior-work/modular-kitchen-furniture">Modular Kitchens</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Material Supply</h3>
              <ul className="footer-links">
                <li><Link to="/material-supply/gypsum-boards-ceiling-materials">Gypsum & Ceilings</Link></li>
                <li><Link to="/material-supply/panels">Panels</Link></li>
                <li><Link to="/material-supply/decorative-materials">Decorative</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Contact Us</h3>
              <p className="footer-contact-name">Qarat Interior Decorator</p>
              <p className="footer-address">
                Ali Nawab Market, Hardoi Road, Dubagga,<br />
                Lucknow, Uttar Pradesh – 226003
              </p>
              <a href="tel:09336411421" className="footer-phone">09336411421</a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Qarat Interior Decorator. All Rights Reserved.
            </p>
            <p className="footer-legal">
              Designed by <a href="https://edonesolution.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Edone Solution</a>
            </p>
            <button onClick={scrollToTop} className="back-to-top">
              Back to Top &uarr;
            </button>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
