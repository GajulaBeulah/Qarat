import React from 'react';
import { CheckCircle2, Hammer, Layers } from 'lucide-react';
import './WhyQarat.css';

const WhyQarat = () => {
  return (
    <section className="why-qarat-section">
      <div className="why-qarat-container">
        
        <div className="why-layout">
          
          {/* Left Column - Image with Arch & Floating Cards */}
          <div className="why-left-col">
            <div className="why-img-arch-wrapper">
              <img 
                src="/images/ceiling-hero-new.png" 
                alt="Clean architectural interior executed by Qarat" 
                className="why-img-arch" 
              />
              
              {/* Floating Cards (Design & Build equivalent) */}
              <div className="why-floating-cards">
                <div className="why-float-card dark-card">
                  <Hammer size={28} className="float-icon" />
                  <span className="float-text">Interior Work</span>
                </div>
                <div className="why-float-card light-card">
                  <Layers size={28} className="float-icon" />
                  <span className="float-text">Materials</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content & Benefits */}
          <div className="why-right-col">
            <div className="why-header">
              <div className="why-eyebrow">Why Qarat</div>
              <h2 className="why-title">Interior Work and Materials, Together</h2>
              <p className="why-desc">
                From interior execution to material requirements, Qarat provides practical solutions for residential, office and commercial spaces.
              </p>
            </div>
            
            <div className="why-benefits-list">
              
              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Complete Interior Solutions</h3>
                  <p className="benefit-desc">Interior work and material supply available through one business.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Quality Materials</h3>
                  <p className="benefit-desc">Interior materials selected for the requirements offered by Qarat.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Professional Work</h3>
                  <p className="benefit-desc">Practical interior solutions focused on the customer's space and requirement.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Residential & Commercial</h3>
                  <p className="benefit-desc">Solutions for homes, offices, shops and commercial spaces where offered.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Clear Consultation</h3>
                  <p className="benefit-desc">Discuss your interior work or material requirement before getting started.</p>
                </div>
              </div>

              <div className="benefit-row">
                <div className="benefit-icon-wrapper">
                  <CheckCircle2 size={24} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Local Service in Lucknow</h3>
                  <p className="benefit-desc">Based at Ali Nawab Market, Hardoi Road, Dubagga, Lucknow.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyQarat;
