import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQHome.css';

const FAQHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we provide free site visits and cost estimates for projects in Lucknow. Contact us via WhatsApp to schedule a visit."
    },
    {
      question: "Do you only supply materials, or do you install them too?",
      answer: "We do both! We are a complete interior decorator handling end-to-end installation, but we also supply premium materials (Gypsum, Panels) to contractors and builders."
    },
    {
      question: "Which areas do you serve?",
      answer: "We are based in Dubagga, Lucknow, and we serve residential and commercial clients across Lucknow and nearby areas."
    },
    {
      question: "How long does a typical interior project take?",
      answer: "Project timelines vary depending on the scope of work. A single room or modular kitchen may take 2-3 weeks, while a complete home interior project generally takes 45 to 60 days from finalization of design to handover."
    },
    {
      question: "Do you provide 3D designs before starting the work?",
      answer: "Absolutely. Once the layout and requirements are finalized, our design team creates detailed 3D renders. This helps you visualize the exact look of your space before execution begins."
    },
    {
      question: "What types of materials do you use for modular kitchens?",
      answer: "We only use high-quality, durable materials such as BWP (Boiling Water Proof) plywood, HDF/MDF, premium laminates, acrylic finishes, and top-tier hardware brands (like Hettich or Blum) to ensure longevity."
    },
    {
      question: "Is there a warranty on your interior work?",
      answer: "Yes! We stand behind the quality of our craftsmanship. We offer comprehensive warranties on our modular furniture, hardware, and installation services. The exact warranty period depends on the specific materials chosen."
    },
    {
      question: "Can you work within a specific budget?",
      answer: "Yes, we believe in transparent pricing. We discuss your budget upfront and suggest the best material combinations and design solutions to deliver a premium finish without exceeding your financial plan."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        <div className="faq-header">
          <div className="faq-eyebrow">
            <span>FAQ — INTERIOR SOLUTIONS</span>
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item-card ${isActive ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-item-header">
                  <h4 className="faq-question-text">{faq.question}</h4>
                  <div className="faq-chevron">
                    <ChevronDown size={20} strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="faq-item-body">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQHome;
