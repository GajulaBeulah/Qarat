import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialBlock.css';

const reviews = [
  { 
    id: 1, 
    text: "The interior execution was flawless. The design team listened to all our requirements and delivered a spectacular commercial office setup.", 
    author: "Rahul Verma", 
    location: "LUCKNOW", 
    rating: 5 
  },
  { 
    id: 2, 
    text: "Amazing gypsum ceiling work. The team was highly professional, respected our space, and finished the project exactly on the promised timeline.", 
    author: "Sneha Gupta", 
    location: "KANPUR", 
    rating: 5 
  },
  { 
    id: 3, 
    text: "Top quality modular kitchen! The materials used are truly premium and the finishing is top notch. Very happy with the final result.", 
    author: "Amit Singh", 
    location: "DELHI", 
    rating: 4 
  },
  { 
    id: 4, 
    text: "Beautiful WPC panels and wallpaper installation. Changed the entire look of our living room. It feels incredibly luxurious now.", 
    author: "Priya Sharma", 
    location: "NOIDA", 
    rating: 5 
  },
  { 
    id: 5, 
    text: "Great pricing for UV marble sheets. The delivery was quick and the quality is outstanding. Will definitely order from them again.", 
    author: "Vikram Reddy", 
    location: "HYDERABAD", 
    rating: 5 
  },
  { 
    id: 6, 
    text: "Qarat managed our entire home interior. The transition from material selection to final execution was completely seamless. Highly recommended.", 
    author: "Neha Patel", 
    location: "LUCKNOW", 
    rating: 5 
  }
];

const TestimonialBlock = () => {
  return (
    <section className="tb-section">
      <div className="tb-container">
        
        <div className="tb-header">
          <div className="tb-eyebrow">Client Reviews</div>
          <h2 className="tb-title">What Our Clients Say</h2>
          <p className="tb-subtitle">Real experiences from spaces we have transformed across the country.</p>
        </div>

        <div className="tb-grid">
          {reviews.map((review) => (
            <div key={review.id} className="tb-card">
              <div className="tb-stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "#B79A6B" : "transparent"} 
                    color={i < review.rating ? "#B79A6B" : "#D4CFC9"} 
                  />
                ))}
              </div>
              <p className="tb-text">"{review.text}"</p>
              <div className="tb-author-box" style={{ justifyContent: 'space-between' }}>
                <div>
                  <h4 className="tb-author-name">{review.author}</h4>
                  <p className="tb-author-loc">{review.location}</p>
                </div>
                <div className="tb-author-avatar">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialBlock;
