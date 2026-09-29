import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectsShowcase.css';

const ProjectsShowcase = () => {
  return (
    <section className="projects-showcase">
      <h2 className="ps-title">Projects Showcase</h2>

      <div className="ps-container">
        <Link to="/projects" className="ps-card ps-top">
          <img src="/images/ceiling-hero-new.png" alt="Luxury Residence" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/new-upload-3.jpg" alt="Modern Office" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/uv-marble-supply-new.jpg" alt="Retail Showroom" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/kitchen-4.png" alt="Modular Kitchen" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/ceiling-3.png" alt="Ceiling Work" className="ps-img" />
        </Link>
        <Link to="/projects" className="ps-card ps-bottom-card">
          <img src="/images/new-upload-1.jpg" alt="Fluted Panel" className="ps-img" />
        </Link>
      </div>

      <Link to="/projects" className="ps-btn">
        View All Projects <ArrowRight size={18} />
      </Link>
    </section>
  );
};

export default ProjectsShowcase;
