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
    id: 7,
    image: '/images/ceiling-1.png',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'Gypsum False Ceiling',
    desc: 'Seamless, smooth fire-resistant finish. Ideal for premium and modern living rooms and offices.'
  },
  {
    id: 8,
    image: '/images/ceiling-5.png',
    category: 'Ceiling Work',
    subcategories: ['All', 'Ceiling Work'],
    title: 'POP Murga Jali',
    desc: 'Highly durable and traditional ceiling design, perfect for intricate and curved custom shapes.'
  },
  {
    id: 13,
    image: '/images/new-upload-1.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'WPC (Wood Plastic Composite) Panel',
    desc: 'Premium WPC fluted panels for durable and aesthetic wood-like finishes.'
  },
  {
    id: 14,
    image: '/images/pvc-2.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'PVC Panel',
    desc: 'Moisture-resistant and cost-effective wall paneling for any room.'
  },
  {
    id: 15,
    image: '/images/uv-marble-supply-new.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'UV Marble Sheet',
    desc: 'High-gloss, elegant marble-like finish without the cost of real stone.'
  },
  {
    id: 16,
    image: '/images/wallpaper-floral.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Wallpaper',
    desc: 'Premium floral wallpaper installation for a seamless and elegant interior accent.'
  },
  {
    id: 17,
    image: '/images/new-upload-3.jpg',
    category: 'Wall & Decorative Work',
    subcategories: ['All', 'Wall & Decorative Work'],
    title: 'Fluted Panel',
    desc: 'Custom-designed fluted wall panels offering a contemporary look and texture.'
  },
  {
    id: 18,
    image: '/images/gallery-1.jpg',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Modular Kitchen',
    desc: 'Custom, water-resistant modular kitchens designed for smart storage, ergonomics, and effortless daily maintenance.'
  },
  {
    id: 19,
    image: '/images/project4.jpg',
    category: 'Modular Kitchen & Furniture',
    subcategories: ['All', 'Modular Kitchen & Furniture'],
    title: 'Modular Furniture',
    desc: 'Intelligent, space-maximizing custom furniture solutions tailored to fit your exact dimensions and stylistic preferences.'
  }
];

const categories = [
  'All', 
  'Ceiling Work', 
  'Wall & Decorative Work', 
  'Modular Kitchen & Furniture'
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
