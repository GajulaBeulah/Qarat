import React, { useState } from 'react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: 'Interior Work - Ceiling Work',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, requirement, message } = formData;
    
    let text = `Hi, I would like to request a quote.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Requirement:* ${requirement}`;
    if (message) {
      text += `\n*Message:* ${message}`;
    }

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919336411421?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

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
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }} />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91" style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Requirement Type</label>
              <select name="requirement" value={formData.requirement} onChange={handleChange} style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px', backgroundColor: 'white' }}>
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
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us more about your project..." style={{ width: '100%', padding: '12px', border: '1px solid #E2E8F0', borderRadius: '4px' }}></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem' }}>Request a Quote</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default GetQuote;
