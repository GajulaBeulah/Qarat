import React from 'react';

const GetQuote = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header" style={{ backgroundColor: 'var(--text-primary)', color: 'white', padding: '140px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white' }}>Tell Us About Your Requirement</h1>
          <p style={{ maxWidth: '600px', margin: '20px auto 0', color: '#CBD5E1' }}>
            Get a free estimate for your interior project or material supply needs.
          </p>
        </div>
      </div>

      <div className="section container">
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name</label>
              <input type="text" placeholder="Your full name" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }} />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
              <input type="tel" placeholder="+91" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Requirement Type</label>
              <select style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: 'white' }}>
                <option>Interior Work - Ceiling Work</option>
                <option>Interior Work - Wall & Decorative Work</option>
                <option>Interior Work - Modular Kitchen & Furniture</option>
                <option>Material Supply - Gypsum Boards</option>
                <option>Material Supply - Panels</option>
                <option>Material Supply - Decorative Materials</option>
                <option>Other / General Enquiry</option>
              </select>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message (Optional)</label>
              <textarea rows="4" placeholder="Tell us more about your project..." style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>Request a Quote</button>
          </form>

          <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #E2E8F0', paddingTop: '30px' }}>
            <p style={{ marginBottom: '10px' }}>Or reach us directly:</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <a href="https://wa.me/919336411421" style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>WhatsApp: 09336411421</a>
              <a href="tel:09336411421" style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>Call: 09336411421</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
