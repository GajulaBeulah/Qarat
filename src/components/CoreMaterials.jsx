import React from 'react';
import './CoreMaterials.css';

const CoreMaterials = () => {
  return (
    <section className="core-materials">
      <div className="cm-container">
        <h2>Core Materials</h2>
        <div className="cm-grid">
          <div className="cm-card">
            <h3>Gypsum Boards</h3>
            <p>Premium quality for all ceiling designs.</p>
          </div>
          <div className="cm-card">
            <h3>WPC Panels</h3>
            <p>Durable and stylish wall paneling solutions.</p>
          </div>
          <div className="cm-card">
            <h3>Plywood & Laminates</h3>
            <p>High-grade foundations for modular furniture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreMaterials;