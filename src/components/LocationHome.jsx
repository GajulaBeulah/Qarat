import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './LocationHome.css';

const LocationHome = () => {
  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-layout">
          
          {/* Left Column: Location Information */}
          <div className="location-info-col">
            <div className="location-eyebrow">Location & Service Area</div>
            <h2 className="location-title">Serving Customers in Lucknow</h2>
            <p className="location-desc">
              Visit or contact Qarat Interior Decorator for interior work and material supply requirements in Lucknow.
            </p>

            <div className="address-block">
              <h3 className="address-title">Qarat Interior Decorator</h3>
              <p className="address-text">
                Ali Nawab Market, Hardoi Road, Dubagga,<br />
                Lucknow, Uttar Pradesh – 226003
              </p>
              <p className="contact-text">Phone / WhatsApp: 09336411421</p>
            </div>

            <div className="location-actions">
              <a href="tel:09336411421" className="loc-btn loc-btn-primary">
                <Phone size={18} /> Call Now
              </a>
              <a href="https://wa.me/919336411421" className="loc-btn loc-btn-secondary">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Map */}
          <div className="location-map-col">
            <div className="map-wrapper" style={{ padding: 0, border: 'none', background: 'transparent' }}>
              <iframe 
                src="https://maps.google.com/maps?q=Qarat+Interior+Decorator,+Ali+Nawab+Market,+Hardoi+Road,+Dubagga,+Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '12px', minHeight: '400px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Qarat Interior Decorator Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationHome;
