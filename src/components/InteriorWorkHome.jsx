import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './InteriorWorkHome.css';

const InteriorWorkHome = () => {
  return (
    <section className="interior-bento-section">
      <div className="ib-container">
        
        <div className="ib-text-block">
          <span className="ib-eyebrow">Our Interior Work</span>
          <h2 className="ib-title">Interior Solutions Designed Around Your Space</h2>
          <p className="ib-desc">
            From ceilings and decorative walls to modular kitchen and furniture solutions, Qarat provides practical interior work for residential, office and commercial spaces.
          </p>
          <div className="ib-button-wrapper">
            <Link to="/interior-work" className="ib-link-text">
              Explore Interior Work <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="ib-cards-wrapper">
          <Link to="/interior-work/ceiling-work" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/interior-work-new.jpg" alt="Ceiling Work" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Ceiling Work</h3>
              <p className="ib-card-desc">Gypsum false ceilings, gypsum tiles, POP Murga Jali and PVC ceiling and wall solutions.</p>
            </div>
          </Link>

          <Link to="/interior-work/wall-decorative-work" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/new-upload-2.jpg" alt="Wall & Decorative Work" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Wall & Decorative Work</h3>
              <p className="ib-card-desc">WPC panels, PVC panels, UV Marble sheets, wallpaper and fluted panel solutions.</p>
            </div>
          </Link>

          <Link to="/interior-work/modular-kitchen-furniture" className="ib-card">
            <div className="ib-img-arch">
              <img src="/images/kitchen-4.png" alt="Modular Kitchen & Furniture" />
            </div>
            <div className="ib-card-content">
              <h3 className="ib-card-title">Modular Kitchen & Furniture</h3>
              <p className="ib-card-desc">Modular kitchen and furniture solutions designed around the customer's requirements.</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InteriorWorkHome;
