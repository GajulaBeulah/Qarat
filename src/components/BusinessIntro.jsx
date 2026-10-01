import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Cuboid, Sofa, Sparkles } from 'lucide-react';
import './BusinessIntro.css';

const BusinessIntro = () => {
  return (
    <section className="business-intro-section">
      <div className="bi-container">
        
        {/* Top Header Row matching the 3-column layout in the screenshot */}
        <div className="bi-header-row">
          <div className="bi-header-left">
            <span className="bi-eyebrow">ABOUT QARAT</span>
            <h2 className="bi-title">Complete Interior Solutions, From Work to Materials</h2>
          </div>
          
          <div className="bi-header-middle">
            <p className="bi-desc">
              Qarat Interior Decorator provides interior work and material supply solutions for homes, offices and commercial spaces in Lucknow. From ceiling and wall solutions to decorative materials, modular kitchen and furniture requirements, Qarat brings interior work and material options together in one place.
            </p>
          </div>
          
          <div className="bi-header-right">
            <Link to="/about" className="bi-btn">
              ABOUT US <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Cards Row matching the grid of image cards in the screenshot */}
        <div className="bi-cards-row">
          
          {/* Card 1 */}
          <div className="bi-card">
            <img src="/images/interior-work-new.jpg" alt="Ceiling Solutions" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Hammer size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">Interior Work</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bi-card">
            <img src="/images/new-upload-1.jpg" alt="Material Supply" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Cuboid size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">WPC Material Supply</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bi-card">
            <img src="/images/kitchen-4.png" alt="Modular Kitchen" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Sofa size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">Modular Kitchen</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bi-card">
            <img src="/images/uv-marble-supply-new.jpg" alt="Decorative Solutions" className="bi-card-bg" />
            <div className="bi-card-overlay">
              <div className="bi-card-icon">
                <Sparkles size={24} color="#B79A6B" />
              </div>
              <h3 className="bi-card-title">PVC TV Unit</h3>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default BusinessIntro;
