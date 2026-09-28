import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import WhyQarat from '../components/WhyQarat';
import LocationHome from '../components/LocationHome';
import './InteriorPages.css'; // For the hero section
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Discover Our Story</p>
          <h1 className="page-title">About Qarat Interior Decorator</h1>
          <p className="page-desc">
            Bridging the gap between high-end interior design and reliable, professional execution in Lucknow.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-section">
        <div className="about-container">
          
          <div className="about-intro">
            <div className="about-image-wrapper">
              <img src="/images/ceiling-hero-new.png" alt="Qarat Interior Execution" className="about-main-img" />
            </div>
            
            <div className="about-text-content">
              <span className="about-eyebrow">Who We Are</span>
              <h2 className="about-title">A Premier Interior & Material Supply Company</h2>
              <p className="about-desc">
                Based in Dubagga, Lucknow, Qarat Interior Decorator is dedicated to transforming spaces into beautiful, highly functional environments. We take pride in our meticulous craftsmanship and transparent communication.
              </p>
              <p className="about-desc">
                Whether you are a homeowner looking to revamp your living room with a modern false ceiling, or a contractor seeking a reliable supply of premium PVC and WPC panels, Qarat is your trusted local partner. We combine top-tier materials with expert execution.
              </p>
            </div>
          </div>

          <div className="about-features">
            {/* Interior Work */}
            <div className="feature-card">
              <div className="fc-img-wrapper">
                <img src="/images/new-upload-3.jpg" alt="Interior Work" />
              </div>
              <div className="fc-content">
                <h3 className="feature-title">Interior Work</h3>
                <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                  <li>Gypsum False Ceiling – Contractor</li>
                  <li>Gypsum Tiles Ceiling – Contractor</li>
                  <li>POP Murga Jali Ceiling – Contractor</li>
                  <li>PVC Panel Ceiling & Wall – Contractor</li>
                  <li>WPC Panel Work – Contractor</li>
                  <li>UV Marble Sheet Work</li>
                  <li>Wallpaper Work</li>
                  <li>Modular Furniture</li>
                  <li>Modular Kitchen</li>
                  <li>Home, Office & Commercial Interior</li>
                </ul>
              </div>
            </div>

            {/* Material Supply */}
            <div className="feature-card reverse">
              <div className="fc-img-wrapper">
                <img src="/images/new-upload-2.jpg" alt="Material Supply" />
              </div>
              <div className="fc-content">
                <h3 className="feature-title">Material Supply</h3>
                <ul className="feature-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                  <li>India Gypsum Board</li>
                  <li>Gyproc Board – All Material</li>
                  <li>USG Boral Board – All Material</li>
                  <li>Gypsum Tiles</li>
                  <li>PVC Panel & WPC Panel</li>
                  <li>UV Marble Sheet</li>
                  <li>Wallpaper & Fluted Panel</li>
                </ul>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="feature-card location-card">
              <div className="fc-img-wrapper">
                <img src="/images/uv-marble-supply-new.jpg" alt="Service Areas" />
              </div>
              <div className="fc-content">
                <h3 className="feature-title">Our Service Areas</h3>
                <ul className="feature-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <MapPin size={24} style={{ flexShrink: 0, marginTop: '2px', color: '#FFFFFF' }} />
                    <div>
                      <span style={{ display: 'block', marginBottom: '8px', fontSize: '1.05rem' }}><strong>Lucknow:</strong> Ali Nawab Market, Hardoi Road, Dubagga (UP – 226003)</span>
                      <span style={{ display: 'block', fontSize: '1.05rem' }}><strong>Serving:</strong> Lucknow & Ayodhya / Faizabad regions.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Phone size={24} style={{ flexShrink: 0, color: '#FFFFFF' }} />
                    <span style={{ fontSize: '1.05rem' }}>Phone: 09336411421</span>
                  </li>
                  <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <MessageCircle size={24} style={{ flexShrink: 0, color: '#FFFFFF' }} />
                    <span style={{ fontSize: '1.05rem' }}>WhatsApp: 09336411421</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyQarat />

      {/* Where We Serve */}
      <LocationHome />

    </div>
  );
};

export default About;
