import React from 'react';
import './InteriorPages.css';

const WallWork = () => {
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
          <h1 className="page-title">Wall & Decorative Solutions</h1>
          <p className="page-desc">
            Transform blank walls into stunning focal points with our premium range of WPC, PVC, UV Marble Sheets, and Fluted panels.
          </p>
        </div>
      </section>

      {/* Detail Layout */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="detail-layout">
            
            {/* Sidebar Nav */}
            <aside className="detail-sidebar">
              <h3 className="sidebar-title">Wall Services</h3>
              <ul className="sidebar-nav">
                <li><a href="#wpc-panel" onClick={(e) => { e.preventDefault(); handleScroll('wpc-panel'); }}>WPC Panel</a></li>
                <li><a href="#pvc-panel" onClick={(e) => { e.preventDefault(); handleScroll('pvc-panel'); }}>PVC Panel</a></li>
                <li><a href="#uv-marble" onClick={(e) => { e.preventDefault(); handleScroll('uv-marble'); }}>UV Marble Sheet</a></li>
                <li><a href="#wallpaper" onClick={(e) => { e.preventDefault(); handleScroll('wallpaper'); }}>Wallpaper</a></li>
                <li><a href="#fluted-panel" onClick={(e) => { e.preventDefault(); handleScroll('fluted-panel'); }}>Fluted Panel</a></li>
              </ul>
            </aside>

            {/* Content Blocks */}
            <div className="detail-content">
              
              <div id="wpc-panel" className="service-block">
                <img src="/images/project1.jpg" alt="WPC Panel" className="service-block-img" />
                <h2 className="service-block-title">WPC (Wood Plastic Composite) Panel</h2>
                <p className="service-block-desc">
                  WPC panels are the premium choice for achieving a natural wood aesthetic without the maintenance drawbacks of real wood. Highly durable, termite-proof, and water-resistant, they are perfect for exterior cladding, balcony walls, and rich interior feature walls that require longevity and elegance.
                </p>
              </div>

              <div id="pvc-panel" className="service-block">
                <img src="/images/project2.jpg" alt="PVC Panel" className="service-block-img" />
                <h2 className="service-block-title">PVC Panel</h2>
                <p className="service-block-desc">
                  PVC wall panels provide a versatile and cost-effective solution for interior wall decoration. They are 100% waterproof, making them ideal for damp environments. With a vast array of finishes—from high-gloss colors to textured woodgrains—PVC panels can completely revitalize a room in just hours.
                </p>
              </div>

              <div id="uv-marble" className="service-block">
                <img src="/images/project4.jpg" alt="UV Marble Sheet" className="service-block-img" />
                <h2 className="service-block-title">UV Marble Sheet</h2>
                <p className="service-block-desc">
                  Achieve the ultra-luxurious look of Italian marble at a fraction of the cost and weight. UV Marble Sheets feature a high-gloss, UV-cured finish that mimics real stone perfectly. They are excellent for TV unit backdrops, bathroom walls, and commercial reception areas where a high-end reflective finish is desired.
                </p>
              </div>

              <div id="wallpaper" className="service-block">
                <img src="/images/project3.jpg" alt="Wallpaper" className="service-block-img" />
                <h2 className="service-block-title">Wallpaper</h2>
                <p className="service-block-desc">
                  From subtle textures to bold, large-scale prints, our premium wallpaper collection adds instant character and depth to any space. We provide expert surface preparation and flawless installation to ensure seamless joints and long-lasting adherence for your bedrooms, living rooms, and office accent walls.
                </p>
              </div>

              <div id="fluted-panel" className="service-block">
                <img src="/images/project1.jpg" alt="Fluted Panel" className="service-block-img" />
                <h2 className="service-block-title">Fluted Panel</h2>
                <p className="service-block-desc">
                  Fluted panels offer a modern, architectural ribbed texture that plays beautifully with light and shadow. Widely used by top interior designers, these 3D panels create vertical lines that can make spaces feel taller and more sophisticated. Perfect for feature walls, headboards, and reception desks.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WallWork;
