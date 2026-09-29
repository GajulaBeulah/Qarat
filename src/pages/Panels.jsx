import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, ChevronUp, ArrowRight, Quote , Trophy, Users , PlayCircle , CheckCircle , Clock, Award } from 'lucide-react';
import './ServiceDetail.css';
import ProjectGallery from '../components/ProjectGallery';
import FinalCTA from '../components/FinalCTA';

const Panels = () => {
  const services = [
    {
      id: "pvc-panel",
      title: "PVC Panel Supply",
      img: "/images/pvc-1.png",
      desc: "Vast inventory of waterproof PVC panels in gloss, matte, and metallic finishes at wholesale rates."
    },
    {
      id: "wpc-panel",
      title: "WPC (Wood Plastic Composite) Panel",
      img: "/images/new-upload-1.jpg",
      desc: "Heavy-duty WPC exterior and interior louvers for rich wood-tone cladding without termite or water issues."
    },
    {
      id: "fluted-panel",
      title: "Fluted Panel",
      img: "/images/new-upload-3.jpg",
      desc: "Modern architectural ribbed panels in charcoal and PVC materials. Perfect for luxury TV units and backdrops."
    }
  ];

  const reviews = [
    {
      name: "Rahul Verma",
      location: "Lucknow",
      text: "The interior execution was flawless. The design team listened to all our requirements and delivered a spectacular commercial office setup."
    },
    {
      name: "Sneha Gupta",
      location: "Kanpur",
      text: "Amazing work! The team was highly professional, respected our space, and finished the project exactly on the promised timeline."
    },
    {
      name: "Amit Singh",
      location: "Delhi",
      text: "Top quality materials and installation. The finishing is top notch. Very happy with the final result and highly recommend them."
    },
    {
      name: "Priya Sharma",
      location: "Noida",
      text: "Beautiful execution and highly durable work. They completely transformed our living room into a luxurious space within a week."
    },
    {
      name: "Vikram Reddy",
      location: "Hyderabad",
      text: "Superb craftsmanship and very transparent pricing. There were no hidden costs and the 3D designs matched the final outcome perfectly."
    }
  ];

  const faqs = [
    {
      q: "Do you provide free estimates?",
      a: "Yes, we provide free site visits and cost estimates for projects in Lucknow. Contact us via WhatsApp to schedule a visit."
    },
    {
      q: "Do you only supply materials, or do you install them too?",
      a: "We offer both! We are a leading material supplier for contractors, but we also have an in-house execution team for end-to-end installation."
    },
    {
      q: "Which areas do you serve?",
      a: "We primarily serve Lucknow and surrounding regions for installation, but we can supply materials in bulk across India."
    },
    {
      q: "How long does a typical interior project take?",
      a: "It depends on the scope. A single room ceiling or wall paneling can take 2-4 days, while a full home interior may take 3-6 weeks."
    },
    {
      q: "Do you provide 3D designs before starting the work?",
      a: "Yes, we offer complete 3D visualization and rendering services so you can see exactly how your space will look before execution begins."
    },
    {
      q: "What types of materials do you use for modular kitchens?",
      a: "We use only premium, branded materials. For modular kitchens we use Hettich/Blum hardware, and for ceilings we use genuine Gyproc or USG Boral boards."
    },
    {
      q: "Is there a warranty on your interior work?",
      a: "Yes! All our installations come with a standard 1-year service warranty, and the materials carry their respective manufacturer warranties (up to 10 years)."
    },
    {
      q: "Can you work within a specific budget?",
      a: "Absolutely. We offer a range of material finishes from cost-effective PVC panels to ultra-luxury UV marble sheets to accommodate various budgets."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-page">
                  {/* 2. Hero Section */}
      <section className="sp-hero" style={{ backgroundImage: `url(/images/new-upload-2.jpg)` }}>
        <div className="sp-hero-overlay"></div>
        <div className="sp-container sp-hero-container">
          <div className="sp-hero-content">
            <div className="sp-eyebrow-pill">
              <span className="dot"></span>
              <span className="sp-eyebrow">MATERIAL SUPPLY</span>
            </div>
            
            <h1 className="sp-title">Best Panels Supply in lucknow</h1>
            <p className="sp-desc">
              Wholesale and retail supply of premium PVC, WPC, and Fluted panels for modern wall and ceiling applications.
            </p>

            <div className="sp-hero-buttons">
              <Link to="/get-quote" className="sp-btn sp-btn-primary">Get Quote <ArrowRight size={18} /></Link>
              <button onClick={() => handleScroll('services')} className="sp-btn sp-btn-play">
                <span className="play-icon-wrap"><PlayCircle size={20} /></span>
                Our Materials
              </button>
            </div>
            
            <div className="sp-hero-glass-stats">
              <div className="sp-stat-item">
                <Trophy size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">5+</span>
                <span className="sp-stat-label">Years Experience</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Star size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">4.8</span>
                <span className="sp-stat-label">Average Rating</span>
              </div>
              <div className="sp-stat-divider"></div>
              <div className="sp-stat-item">
                <Users size={28} className="sp-stat-icon" />
                <span className="sp-stat-value">500+</span>
                <span className="sp-stat-label">Happy Clients</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

{/* 3. What We Offer */}
      <section id="services" className="sp-section sp-services-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-eyebrow-dark">Panel Types</span>
            <h2>Our Panel Selection</h2>
          </div>

          <div className="sp-services-grid">
            {services.map(service => (
              <div key={service.id} className="sp-service-card">
                <div className="sp-service-img-wrap">
                  <img src={service.img} alt={service.title} className="sp-service-img" />
                  <div className="sp-service-icon-badge">
                    <CheckCircle size={28} />
                  </div>
                </div>
                <div className="sp-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="sp-service-actions">
                    <Link to="/get-quote" className="sp-btn-text">Get Quote <ArrowRight size={18} /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* 4. About Section */}
      <section className="sp-about-section">
        <div className="sp-container sp-about-grid">
          
          <div className="sp-about-content">
            <h2>Who We Are</h2>
            <p>Qarat is the leading supplier of architectural wall and ceiling panels in Lucknow. We stock a massive variety of PVC, WPC, and charcoal panels to supply contractors, builders, and homeowners with high-quality, durable finishes for modern interiors.</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={36} strokeWidth={1.5} />
                <span>Huge Inventory</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={36} strokeWidth={1.5} />
                <span>Wholesale Pricing</span>
              </div>
              <div className="sp-feature-item">
                <Users size={36} strokeWidth={1.5} />
                <span>Ready Stock</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/new-upload-1.jpg" alt="Interior Details" className="sp-main-img" />
            <img src="/images/pvc-wall.png" alt="Interior Decor" className="sp-circle-img" />
            <div className="sp-play-btn-box">
              <PlayCircle size={40} fill="#24211E" color="#FFF" />
            </div>
          </div>

        </div>
      </section>

      
      <ProjectGallery category="panels" />

      {/* 5. Customer Reviews */}
      <section className="sp-reviews-section">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">CLIENT REVIEWS</span>
            <h2>What Our Clients Say</h2>
            <p className="sp-section-subtitle">Real experiences from spaces we have transformed across the country.</p>
          </div>
          
          <div className="sp-reviews-flex">
            {reviews.map((review, idx) => (
              <div key={idx} className="sp-review-card">
                <div className="sp-stars">
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                  <Star size={14} color="#B79A6B" fill="#B79A6B" />
                </div>
                <p className="sp-review-text">"{review.text}"</p>
                <div className="sp-review-footer">
                  <div className="sp-review-avatar">{review.name.charAt(0)}</div>
                  <div className="sp-review-author">
                    <h4>{review.name}</h4>
                    <p>{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="sp-faq-section" id="faq">
        <div className="sp-container">
          <div className="sp-section-header">
            <span className="sp-section-eyebrow">FAQ — INTERIOR SOLUTIONS</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="sp-faq-container">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`sp-faq-item ${openFaq === idx ? 'active' : ''}`}>
                <button className="sp-faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  {faq.q}
                  <ChevronDown size={20} className="sp-faq-icon" />
                </button>
                <div className="sp-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />

    </div>
  );
};

export default Panels;
