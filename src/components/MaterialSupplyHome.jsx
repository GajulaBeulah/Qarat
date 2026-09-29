import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, Layers, Palette } from 'lucide-react';
import './MaterialSupplyHome.css';

const MaterialSupplyHome = () => {
  return (
    <section className="material-home-section">
      <div className="material-home-container">
        
        {/* Left Side: Content */}
        <div className="mhs-left-col">
          <div className="mhs-eyebrow-container">
            <span className="mhs-eyebrow-icon">❖</span>
            <span className="mhs-eyebrow">Material Supply</span>
          </div>
          
          <h2 className="mhs-title">Materials for Your Interior Project</h2>
          <p className="mhs-desc">
            Explore interior materials available through Qarat for ceiling, wall and decorative applications.
          </p>
          
          <div className="mhs-actions">
            <Link to="/material-supply" className="mhs-btn-primary">
              Explore Materials <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Side: 3 Tall Cards */}
        <div className="mhs-right-col">
          
          {/* Card 1 */}
          <Link to="/material-supply/gypsum-boards-ceiling-materials" className="mhs-card">
            <img src="/images/india-gypsum-stack.png" alt="Gypsum Boards & Ceiling" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Gypsum Boards & Ceiling Materials</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/material-supply/panels" className="mhs-card">
            <img src="/images/new-upload-1.jpg" alt="Panels" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Panels</h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/material-supply/decorative-materials" className="mhs-card">
            <img src="/images/uv-marble-supply-new.jpg" alt="Decorative Materials" className="mhs-card-bg" />
            <div className="mhs-card-content">
              <h3 className="mhs-card-title">Decorative Materials</h3>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default MaterialSupplyHome;
