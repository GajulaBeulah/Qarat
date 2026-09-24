import React from 'react';
import './InteriorPages.css';

const Panels = () => {
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
          <p className="page-eyebrow">Material Supply</p>
          <h1 className="page-title">Panels Supply</h1>
          <p className="page-desc">
            Wholesale and retail supply of premium PVC, WPC, and Fluted panels for modern wall and ceiling applications.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Panel Types</h3>
              <ul className="sidebar-nav">
                <li><a href="#pvc-panel" onClick={(e) => { e.preventDefault(); handleScroll('pvc-panel'); }}>PVC Panel</a></li>
                <li><a href="#wpc-panel" onClick={(e) => { e.preventDefault(); handleScroll('wpc-panel'); }}>WPC Panel</a></li>
                <li><a href="#fluted-panel" onClick={(e) => { e.preventDefault(); handleScroll('fluted-panel'); }}>Fluted Panel</a></li>
              </ul>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="pvc-panel" className="service-block">
                <img src="/images/project1.jpg" alt="PVC Panel Supply" className="service-block-img" />
                <h2 className="service-block-title">PVC Panel Supply</h2>
                <p className="service-block-desc">
                  We maintain a vast inventory of PVC wall and ceiling panels. Available in high-gloss, matte, wooden, and metallic finishes, these waterproof panels are perfect for quick renovations. We supply standard 10ft lengths to interior contractors and bulk buyers at highly competitive wholesale rates.
                </p>
              </div>

              <div id="wpc-panel" className="service-block">
                <img src="/images/project2.jpg" alt="WPC Panel Supply" className="service-block-img" />
                <h2 className="service-block-title">WPC (Wood Plastic Composite) Panel</h2>
                <p className="service-block-desc">
                  Source heavy-duty WPC exterior and interior louvers directly from us. WPC provides the rich look of timber without the susceptibility to water or termites. Ideal for facade cladding, balcony highlights, and premium living room walls, our WPC panels come in multiple rich wood tones (Teak, Walnut, Rosewood).
                </p>
              </div>

              <div id="fluted-panel" className="service-block">
                <img src="/images/project4.jpg" alt="Fluted Panel Supply" className="service-block-img" />
                <h2 className="service-block-title">Fluted Panel</h2>
                <p className="service-block-desc">
                  Supply of modern architectural fluted panels in both charcoal and PVC materials. These ribbed panels are the current trend in luxury interiors, providing depth and texture to TV units, bed backdrops, and commercial reception areas. Available in standard 8ft and 9ft sheets.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Panels;
