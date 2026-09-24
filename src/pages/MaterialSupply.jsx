import React from 'react';
import { Link } from 'react-router-dom';

const MaterialSupply = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header" style={{ backgroundColor: 'var(--text-primary)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Material Supply</h1>
          <p style={{ maxWidth: '600px', margin: '20px auto 0', color: '#CBD5E1' }}>
            We supply high-quality interior materials to contractors, builders, and homeowners across Lucknow.
          </p>
        </div>
      </div>

      <div className="section container">
        <div className="grid-3">
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Gypsum Boards & Ceiling Materials</h3>
              <p>Premium boards from India Gypsum, Gyproc, USG Boral, and Gypsum Tiles.</p>
              <Link to="/material-supply/gypsum-boards-ceiling-materials" className="btn-outline">View Gypsum</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Panels</h3>
              <p>Durable and aesthetic PVC Panels, WPC Panels, and Fluted Panels.</p>
              <Link to="/material-supply/panels" className="btn-outline">View Panels</Link>
            </div>
          </div>
          <div className="card">
            <div className="card-img placeholder-img"></div>
            <div className="card-content">
              <h3>Decorative Materials</h3>
              <p>UV Marble Sheets and modern Wallpapers for a premium finish.</p>
              <Link to="/material-supply/decorative-materials" className="btn-outline">View Decoratives</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialSupply;
