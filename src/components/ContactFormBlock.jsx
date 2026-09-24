import React from 'react';
import './ContactFormBlock.css';

const ContactFormBlock = () => {
  return (
    <section className="contact-form-block">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        
        <div className="contact-layout">
          
          {/* Left Form */}
          <div className="contact-form-col">
            <input type="text" className="contact-input" placeholder="Name" />
            <input type="email" className="contact-input" placeholder="Email" />
            <textarea className="contact-input" placeholder="Message"></textarea>
            <button type="button" className="contact-submit">Send Enquiry</button>
          </div>

          {/* Right Info */}
          <div className="contact-info-col">
            <p className="info-eyebrow">Visit Our Showroom</p>
            <h3 className="info-brand">Qarat Interior Decorator</h3>
            <p className="info-detail">Ali Nawab Market, Hardoi Road, Dubagga, Lucknow, Uttar Pradesh – 226003</p>
            <p className="info-detail"><strong>PHONE / WHATSAPP:</strong> 09336411421</p>
            <p className="info-detail"><strong>EMAIL:</strong> contact@qarat.in</p>

            <div className="info-map-wrapper">
              {/* Standard Google Maps Embed for Lucknow Dubagga area */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.341819586416!2d80.8499252!3d26.8848722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe0000000001%3A0x6b09b0b4b24e62a!2sDubagga%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="info-map" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Qarat Location Map"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormBlock;
