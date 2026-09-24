import React from 'react';
import './InteriorPages.css';

const KitchenWork = () => {
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
          <h1 className="page-title">Modular Kitchen & Furniture</h1>
          <p className="page-desc">
            Bespoke modular solutions designed for maximum efficiency, storage, and aesthetic appeal in modern Indian homes.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Modular Services</h3>
              <ul className="sidebar-nav">
                <li><a href="#modular-kitchen" onClick={(e) => { e.preventDefault(); handleScroll('modular-kitchen'); }}>Modular Kitchen</a></li>
                <li><a href="#modular-furniture" onClick={(e) => { e.preventDefault(); handleScroll('modular-furniture'); }}>Modular Furniture</a></li>
              </ul>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="modular-kitchen" className="service-block">
                <img src="/images/project3.jpg" alt="Modular Kitchen" className="service-block-img" />
                <h2 className="service-block-title">Modular Kitchen</h2>
                <p className="service-block-desc">
                  The heart of your home deserves a functional and beautiful design. Our custom modular kitchens are built using premium water-resistant materials, high-grade laminates/acrylics, and state-of-the-art hardware (like Hettich and Blum). Whether you prefer an L-shape, U-shape, or Island layout, we optimize your cooking space for smart storage, ergonomics, and effortless maintenance.
                </p>
              </div>

              <div id="modular-furniture" className="service-block">
                <img src="/images/project4.jpg" alt="Modular Furniture" className="service-block-img" />
                <h2 className="service-block-title">Modular Furniture</h2>
                <p className="service-block-desc">
                  Maximize your space with intelligent modular furniture solutions. From floor-to-ceiling sliding wardrobes in the bedroom to sleek TV entertainment units in the living room and practical storage cabinets for commercial spaces. We design, manufacture, and install custom furniture that fits your exact dimensions and stylistic preferences, ensuring a seamless look throughout the property.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenWork;
