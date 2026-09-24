import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        
        <div className="final-cta-layout">
          
          {/* Left: Content */}
          <div className="cta-left">
            <div className="cta-eyebrow">Start Your Project</div>
            <h2 className="cta-title">Let’s Plan Your Interior Requirement</h2>
            <p className="cta-desc">
              Whether you need interior work, ceiling solutions, decorative materials, modular kitchen and furniture, or interior material supply, talk to Qarat about your requirement.
            </p>
          </div>

          {/* Right: Actions */}
          <div className="cta-right">
            <div className="cta-line"></div>
            
            <div className="cta-buttons">
              <Link to="/get-quote" className="cta-btn cta-btn-primary">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/919336411421" className="cta-btn cta-btn-secondary">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>

            {/* Subtle architectural project crop */}
            <div className="cta-img-wrapper">
              <img 
                src="/images/project1.jpg" 
                alt="Qarat Interior details" 
                className="cta-img" 
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
