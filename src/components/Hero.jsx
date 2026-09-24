import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section-3d">
      <div className="hero-content-center">
        <h1 className="hero-title">Crafting Spaces Beyond the Ordinary</h1>
        <p className="hero-desc">
          Explore extraordinary designs, compare material options, and uncover interior experiences that match your style. Build smarter, discover more, and make every detail count.
        </p>
        <Link to="/get-quote" className="hero-btn">
          <span className="btn-icon"></span> Get a Quote
        </Link>
      </div>

      <div className="hero-carousel-3d">
        <div className="hero-card card-far-left">
          <img src="/images/project1.jpg" alt="Luxury Bedroom" />
          <div className="card-overlay">
            <h3>Luxury Bedroom</h3>
          </div>
        </div>

        <div className="hero-card card-mid-left">
          <img src="/images/project2.jpg" alt="Modular Kitchen" />
          <div className="card-overlay">
            <h3>Modular Kitchen</h3>
          </div>
        </div>

        <div className="hero-card card-center">
          <img src="/images/project4.jpg" alt="False Ceiling" />
          <div className="card-overlay">
            <h3>False Ceiling</h3>
          </div>
        </div>

        <div className="hero-card card-mid-right">
          <img src="/images/project3.jpg" alt="Wall Paneling" />
          <div className="card-overlay">
            <h3>Wall Paneling</h3>
          </div>
        </div>

        <div className="hero-card card-far-right">
          <img src="/images/project1.jpg" alt="Interior Decor" />
          <div className="card-overlay">
            <h3>Interior Decor</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
