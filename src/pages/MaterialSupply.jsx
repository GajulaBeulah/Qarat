import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorPages.css';
import FinalCTA from '../components/FinalCTA';

const MaterialSupply = () => {
  return (
    <div className="interior-work-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Material Supply</p>
          <h1 className="page-title">Premium Interior Materials</h1>
          <p className="page-desc">
            We supply high-quality interior materials to contractors, builders, and homeowners across Lucknow.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="page-section">
        <div className="page-container">
          <div className="category-grid">
            
            <Link to="/material-supply/gypsum-boards-ceiling-materials" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/gypsum-gyproc.png" alt="Gypsum Boards & Ceiling" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Gypsum Boards & Ceiling</h3>
                <ul className="cat-list">
                  <li>India Gypsum</li>
                  <li>Gyproc</li>
                  <li>USG Boral</li>
                  <li>Gypsum Tiles</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/material-supply/panels" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/new-upload-1.jpg" alt="Panels" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Panels</h3>
                <ul className="cat-list">
                  <li>PVC Panels</li>
                  <li>WPC Panels</li>
                  <li>Fluted Panels</li>
                  <li>Charcoal Panels</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/material-supply/decorative-materials" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/uv-marble-supply-new.jpg" alt="Decorative Materials" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Decorative Materials</h3>
                <ul className="cat-list">
                  <li>UV Marble Sheets</li>
                  <li>Modern Wallpapers</li>
                  <li>Laminates</li>
                  <li>Custom Decor</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
};

export default MaterialSupply;
