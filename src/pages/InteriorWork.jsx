import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorPages.css';
import FinalCTA from '../components/FinalCTA';

const InteriorWork = () => {
  return (
    <div className="interior-work-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Interior Work</p>
          <h1 className="page-title">Complete Interior Solutions</h1>
          <p className="page-desc">
            From custom false ceilings to premium wall treatments and modular kitchens, Qarat provides expert installation and flawless finishing.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="page-section">
        <div className="page-container">
          <div className="category-grid">
            
            <Link to="/interior-work/ceiling-work" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/interior-work-new.jpg" alt="Ceiling Work" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Ceiling Work</h3>
                <ul className="cat-list">
                  <li>Gypsum False Ceiling</li>
                  <li>Gypsum Tiles Ceiling</li>
                  <li>POP Murga Jali Ceiling</li>
                  <li>PVC Panel Ceiling & Wall</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/interior-work/wall-decorative-work" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/floral-living-room.jpg" alt="Wall Work" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Wall & Decorative Work</h3>
                <ul className="cat-list">
                  <li>WPC Panel</li>
                  <li>PVC Panel</li>
                  <li>UV Marble Sheet</li>
                  <li>Wallpaper & Fluted Panel</li>
                </ul>
                <div className="cat-link">View Details <ArrowRight size={16} /></div>
              </div>
            </Link>

            <Link to="/interior-work/modular-kitchen-furniture" className="cat-card">
              <div className="cat-img-wrapper">
                <img src="/images/new-upload-2.jpg" alt="Modular Work" className="cat-img" />
              </div>
              <div className="cat-content">
                <h3 className="cat-title">Modular Kitchen & Furniture</h3>
                <ul className="cat-list">
                  <li>Custom Modular Kitchens</li>
                  <li>Modular Wardrobes</li>
                  <li>Commercial Display Units</li>
                  <li>Custom Furniture</li>
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

export default InteriorWork;
