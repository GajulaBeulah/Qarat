import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import './InteriorPages.css'; // For the hero section
import './Projects.css';

const projectData = [
  {
    id: 1,
    image: '/images/ceiling-4.png',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Corporate Office Ceiling',
    desc: 'Modern false ceiling with integrated linear lighting for a professional workspace.'
  },
  {
    id: 2,
    image: '/images/gypsum-gyproc.png',
    category: 'Gypsum Boards',
    subcategories: ['All', 'Gypsum Boards & Ceiling Materials'],
    title: 'Premium Gypsum Installation',
    desc: 'High-quality gypsum boards installed for superior acoustic and thermal insulation.'
  },
  {
    id: 3,
    image: '/images/new-upload-3.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Living Room Feature Wall',
    desc: 'Custom fluted paneling integrated with a sleek entertainment unit.'
  },
  {
    id: 4,
    image: '/images/new-upload-1.jpg',
    category: 'Panels',
    subcategories: ['All', 'Panels'],
    title: 'WPC Fluted Paneling',
    desc: 'Durable and aesthetic wood-plastic composite panels for a natural wood finish.'
  },
  {
    id: 5,
    image: '/images/uv-marble-supply-new.jpg',
    category: 'Decorative Materials',
    subcategories: ['All', 'Decorative Materials'],
    title: 'Luxury Bedroom Interior',
    desc: 'Featuring a high-gloss UV Marble Sheet backdrop and custom modular furniture.'
  },
  {
    id: 6,
    image: '/images/kitchen-4.png',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Modern Modular Kitchen',
    desc: 'Seamless handle-less cabinets with premium finishes and smart storage solutions.'
  }
];

const categories = [
  'All', 
  'Ceiling Work', 
  'Wall & Decorative Work', 
  'Modular Kitchen & Furniture', 
  'Gypsum Boards & Ceiling Materials', 
  'Panels', 
  'Decorative Materials'
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on the active category
  const filteredProjects = projectData.filter(project => 
    project.subcategories.includes(activeFilter)
  );

  // If we are on 'All', use project4 as featured, and the rest for gallery
  // If a specific filter is active, we might use the first match as featured, or just show all in gallery.
  const featuredProject = filteredProjects.length > 0 ? filteredProjects[0] : null;
  const galleryProjects = filteredProjects.length > 1 ? filteredProjects.slice(1) : [];

  return (
    <div className="projects-page">
      
      {/* SECTION 1 — PROJECTS HERO */}
      <section className="page-hero">
        <div className="page-hero-container">
          <p className="page-eyebrow">Our Projects</p>
          <h1 className="page-title">Spaces That Reflect the Work</h1>
          <p className="page-desc">
            Explore interior work and material applications by Qarat Interior Decorator across residential, office and commercial spaces.
          </p>
        </div>
      </section>

      {/* SECTION 2 — PROJECT INTRODUCTION */}
      <section className="projects-intro">
        <span className="projects-intro-eyebrow">Our Work</span>
        <h2 className="projects-intro-title">Interior Work Across Different Spaces</h2>
        <p className="projects-intro-desc">
          From ceiling and wall solutions to modular kitchen, furniture and decorative applications, explore the type of interior work offered by Qarat.
        </p>
      </section>

      {/* SECTION 3 — PROJECT CATEGORY FILTER */}
      <section className="projects-filters">
        {categories.map((cat) => (
          <button 
            key={cat} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* SECTION 4 — FEATURED PROJECT */}
      {featuredProject && (
        <section className="featured-project">
          <div className="featured-project-inner">
            <img src={featuredProject.image} alt={featuredProject.title} className="featured-project-img" />
            <div className="featured-project-content">
              <span className="featured-category">{featuredProject.category}</span>
              <h3 className="featured-title">{featuredProject.title}</h3>
              <p className="featured-desc">{featuredProject.desc}</p>
              <Link to="/get-quote" className="loc-btn loc-btn-primary" style={{ width: 'fit-content' }}>
                Discuss Similar Project
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 11 — PROJECT GALLERY (Handles Sections 5-10 Dynamically based on filter) */}
      {galleryProjects.length > 0 && (
        <section className="projects-gallery">
          {galleryProjects.map(project => (
            <div key={project.id} className="gallery-item">
              <div className="gallery-img-wrapper">
                <img src={project.image} alt={project.title} className="gallery-img" />
              </div>
              <div className="gallery-content">
                <span className="gallery-category">{project.category}</span>
                <h4 className="gallery-title">{project.title}</h4>
                <p className="gallery-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* SECTION 12 — PROJECT CTA */}
      <section className="project-cta">
        <div className="cta-container">
          <span className="cta-eyebrow">Start Your Project</span>
          <h2 className="cta-title">Have an Interior Requirement?</h2>
          <p className="cta-desc">
            Tell us about your interior work or material requirement and discuss your project with Qarat Interior Decorator.
          </p>
          <div className="cta-buttons">
            <Link to="/get-quote" className="loc-btn loc-btn-primary" style={{ backgroundColor: '#B79A6B', color: '#FFFFFF', borderColor: '#B79A6B' }}>
              Get a Quote
            </Link>
            <a href="tel:09336411421" className="loc-btn loc-btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              <Phone size={18} /> Call Now
            </a>
            <a href="https://wa.me/919336411421" className="loc-btn loc-btn-secondary" style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Projects;
