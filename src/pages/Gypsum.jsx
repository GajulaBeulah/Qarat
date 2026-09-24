import React from 'react';
import './InteriorPages.css';

const Gypsum = () => {
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
          <h1 className="page-title">Gypsum Boards & Ceiling Materials</h1>
          <p className="page-desc">
            We are a leading supplier of premium gypsum boards, ceiling channels, and accessories from top brands like Gyproc and USG Boral.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Gypsum Materials</h3>
              <ul className="sidebar-nav">
                <li><a href="#india-gypsum" onClick={(e) => { e.preventDefault(); handleScroll('india-gypsum'); }}>India Gypsum Board</a></li>
                <li><a href="#gyproc" onClick={(e) => { e.preventDefault(); handleScroll('gyproc'); }}>Gyproc Board & Materials</a></li>
                <li><a href="#usg-boral" onClick={(e) => { e.preventDefault(); handleScroll('usg-boral'); }}>USG Boral Board & Materials</a></li>
                <li><a href="#gypsum-tiles" onClick={(e) => { e.preventDefault(); handleScroll('gypsum-tiles'); }}>Gypsum Tiles</a></li>
              </ul>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="india-gypsum" className="service-block">
                <img src="/images/project2.jpg" alt="India Gypsum Board" className="service-block-img" />
                <h2 className="service-block-title">India Gypsum Board</h2>
                <p className="service-block-desc">
                  We supply genuine India Gypsum boards known for their reliability and cost-effectiveness. Perfect for standard false ceiling applications and drywall partitions in residential and commercial projects. Available in standard thicknesses and sizes with ready stock for bulk contractor orders.
                </p>
              </div>

              <div id="gyproc" className="service-block">
                <img src="/images/project1.jpg" alt="Gyproc Board & Materials" className="service-block-img" />
                <h2 className="service-block-title">Gyproc Board & Materials (Saint-Gobain)</h2>
                <p className="service-block-desc">
                  As a premium offering, we supply the full range of Gyproc boards including standard, moisture-resistant (MR), and fire-line boards. We also stock complete Gyproc metal framing systems (channels, angles, perimeter channels) to ensure your ceiling structure meets the highest safety and quality standards.
                </p>
              </div>

              <div id="usg-boral" className="service-block">
                <img src="/images/project4.jpg" alt="USG Boral Board" className="service-block-img" />
                <h2 className="service-block-title">USG Boral Board & Materials</h2>
                <p className="service-block-desc">
                  For projects specifying USG Boral, we supply their high-performance plasterboards and ceiling systems. Known for their anti-sag properties and superior acoustic performance, these boards are ideal for premium office spaces, auditoriums, and high-end residential interiors.
                </p>
              </div>

              <div id="gypsum-tiles" className="service-block">
                <img src="/images/project3.jpg" alt="Gypsum Tiles" className="service-block-img" />
                <h2 className="service-block-title">Gypsum Tiles</h2>
                <p className="service-block-desc">
                  We supply 2x2 grid ceiling gypsum tiles in various patterns (fully perforated, semi-perforated, vinyl-faced). These are highly sought after for office buildings, hospitals, and retail environments where quick access to overhead utilities and superior acoustic dampening are required.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Gypsum;
