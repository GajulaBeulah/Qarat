import React from 'react';
import './InteriorPages.css';

const Decorative = () => {
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
          <h1 className="page-title">Decorative Materials</h1>
          <p className="page-desc">
            Supply of high-end decorative finishes including UV Marble Sheets and premium Wallpapers for residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Decorative Items</h3>
              <ul className="sidebar-nav">
                <li><a href="#uv-marble" onClick={(e) => { e.preventDefault(); handleScroll('uv-marble'); }}>UV Marble Sheet</a></li>
                <li><a href="#wallpaper" onClick={(e) => { e.preventDefault(); handleScroll('wallpaper'); }}>Wallpaper</a></li>
              </ul>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="uv-marble" className="service-block">
                <img src="/images/project3.jpg" alt="UV Marble Sheet Supply" className="service-block-img" />
                <h2 className="service-block-title">UV Marble Sheet Supply</h2>
                <p className="service-block-desc">
                  We supply 8ft x 4ft UV marble sheets (3mm thickness) that perfectly replicate the look of natural Italian and Onyx marble. These sheets are incredibly popular for quick, luxurious renovations without the heavy lifting or high costs of real stone. We maintain a large catalog of marble vein patterns in stock.
                </p>
              </div>

              <div id="wallpaper" className="service-block">
                <img src="/images/project1.jpg" alt="Wallpaper Supply" className="service-block-img" />
                <h2 className="service-block-title">Wallpaper Rolls</h2>
                <p className="service-block-desc">
                  Supply of imported and domestic wallpaper rolls. Our collection includes heavy-duty vinyl wallpapers, 3D textured prints, metallic accents, and elegant damask patterns. Ideal for interior decorators and homeowners looking to purchase materials for custom installation.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Decorative;
