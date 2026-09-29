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

  // We no longer split into featured and gallery, we just use filteredProjects directly.

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

      {/* BENTO GRID PROJECTS */}
      {filteredProjects.length > 0 && (
        <section className="bento-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="bento-card">
              <div className="bento-card-img-wrap">
                <img src={project.image} alt={project.title} className="bento-card-img" />
              </div>
              <div className="bento-card-content">
                <span className="bento-category">{project.category}</span>
                <h3 className="bento-title">{project.title}</h3>
                <p className="bento-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

    </div>
  );
};

export default Projects;
