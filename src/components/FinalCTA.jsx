import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import './FinalCTA.css';
const FinalCTA = () => {
  return (
    <section className="project-cta">
      <div className="cta-container">
        <span className="cta-eyebrow">Start Your Project</span>
        <h2 className="cta-title">Have an Interior Requirement?</h2>
        <p className="cta-desc">
          Tell us about your interior work or material requirement and discuss your project with Qarat Interior Decorator.
        </p>
        <div className="cta-buttons">
          <Link to="/get-quote" className="loc-btn loc-btn-primary" style={{ backgroundColor: '#B79A6B', color: '#FFFFFF', borderColor: '#B79A6B' }}>
            Get a Quote
          </Link>
          <a href="tel:09336411421" className="loc-btn loc-btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/919336411421" className="loc-btn loc-btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
