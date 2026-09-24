import React from 'react';
import { Link } from 'react-router-dom';
import './InteriorPages.css';

const CeilingWork = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="interior-work-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Interior Work</p>
          <h1 className="page-title">Ceiling Work Solutions</h1>
          <p className="page-desc">
            We provide professional false ceiling installations for homes, bedrooms, living rooms, offices, shops, and commercial spaces.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Ceiling Services</h3>
              <ul className="sidebar-nav">
                <li><a href="#gypsum" onClick={(e) => { e.preventDefault(); handleScroll('gypsum'); }}>Gypsum False Ceiling</a></li>
                <li><a href="#pop" onClick={(e) => { e.preventDefault(); handleScroll('pop'); }}>POP Murga Jali</a></li>
                <li><a href="#pvc" onClick={(e) => { e.preventDefault(); handleScroll('pvc'); }}>PVC Panel Ceiling</a></li>
              </ul>
              
              <div style={{ marginTop: '30px' }}>
                <Link to="/get-quote" className="loc-btn loc-btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>
                  Get Quote
                </Link>
              </div>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="gypsum" className="service-block">
                <img src="/images/project4.jpg" alt="Gypsum False Ceiling" className="service-block-img" />
                <h2 className="service-block-title">Gypsum False Ceiling</h2>
                <p className="service-block-desc">
                  Seamless, smooth finish ideal for living rooms and offices. Gypsum boards offer excellent fire resistance and sound insulation, providing a highly premium and modern look to your interiors.
                </p>
              </div>

              <div id="pop" className="service-block">
                <img src="/images/project2.jpg" alt="POP Murga Jali" className="service-block-img" />
                <h2 className="service-block-title">POP Murga Jali</h2>
                <p className="service-block-desc">
                  Traditional, highly durable ceiling design. Plaster of Paris (POP) applied over a metal mesh (Murga Jali) provides immense strength and allows for complex, intricate, and curved ceiling designs that stand the test of time.
                </p>
              </div>

              <div id="pvc" className="service-block">
                <img src="/images/project1.jpg" alt="PVC Panel Ceiling" className="service-block-img" />
                <h2 className="service-block-title">PVC Panel Ceiling</h2>
                <p className="service-block-desc">
                  Moisture-resistant and quick to install. Perfect for bathrooms, balconies, and areas prone to dampness. PVC panels come in various wood finishes and colors, offering a cost-effective yet beautiful ceiling solution.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CeilingWork;
