import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectsShowcase.css';

const ProjectsShowcase = () => {
  return (
    <section className="projects-showcase">
      <h2 className="ps-title">Projects Showcase</h2>
      
      <div className="ps-container">
        {/* Top Large Card */}
        <Link to="/projects" className="ps-card ps-top">
          <img src="/images/project4.jpg" alt="Luxury Residence" className="ps-img" />
          <div className="ps-content">
            <h3 className="ps-card-title">Luxury Residence Lucknow</h3>
            <p className="ps-card-subtitle">Complete Interior Solutions</p>
          </div>
        </Link>

        {/* Bottom Row */}
        <div className="ps-bottom-row">
          <Link to="/projects" className="ps-card ps-bottom-card">
            <img src="/images/project1.jpg" alt="Modern Office" className="ps-img" />
            <div className="ps-content">
              <h3 className="ps-card-title">Modern Office Space</h3>
            </div>
          </Link>

          <Link to="/projects" className="ps-card ps-bottom-card">
            <img src="/images/project3.jpg" alt="Retail Showroom" className="ps-img" />
            <div className="ps-content">
              <h3 className="ps-card-title">Retail Showroom Design</h3>
            </div>
          </Link>
        </div>
      </div>

      <Link to="/projects" className="ps-btn">
        View All Projects <ArrowRight size={18} />
      </Link>
    </section>
  );
};

export default ProjectsShowcase;
