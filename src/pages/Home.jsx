import React from 'react';
import Hero from '../components/Hero';
import BusinessIntro from '../components/BusinessIntro';
import InteriorWorkHome from '../components/InteriorWorkHome';
import MaterialSupplyHome from '../components/MaterialSupplyHome';
import WhyQarat from '../components/WhyQarat';
import ProjectsShowcase from '../components/ProjectsShowcase';
import TestimonialBlock from '../components/TestimonialBlock';
import FAQHome from '../components/FAQHome';
import LocationHome from '../components/LocationHome';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Business Introduction */}
      <BusinessIntro />

      {/* 3. Interior Work */}
      <InteriorWorkHome />

      {/* 4. Material Supply */}
      <MaterialSupplyHome />

      {/* 5. Why Qarat */}
      <WhyQarat />

      {/* 6. Featured Projects */}
      <ProjectsShowcase />

      {/* 7. Testimonials/Reviews */}
      <TestimonialBlock />

      {/* 8. FAQs */}
      <FAQHome />

      {/* 9. Location / Service Area */}
      <LocationHome />
    </div>
  );
};

export default Home;
