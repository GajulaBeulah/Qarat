import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectGallery.css';

const ProjectGallery = ({ category = "all" }) => {
  const allImages = [
    { src: "/images/pvc-wall.png", alt: "PVC Wall Panel", tags: ["wall", "panels", "decorative"] },
    { src: "/images/gallery-1.jpg", alt: "Kitchen View 1", tags: ["kitchen"] },
    { src: "/images/gallery-2.png", alt: "Kitchen View 2", tags: ["kitchen"] },
    { src: "/images/gallery-3.png", alt: "Wardrobe", tags: ["kitchen"] },
    { src: "/images/gallery-4.png", alt: "Kitchen View 3", tags: ["kitchen"] },
    { src: "/images/kitchen-4.png", alt: "Modular Kitchen", tags: ["kitchen"] },
    { src: "/images/tv-unit.jpg", alt: "Fluted Panel TV Unit", tags: ["wall", "panels", "decorative"] },
    { src: "/images/marble-wall-1.jpg", alt: "UV Marble Wall Design", tags: ["wall", "panels", "decorative"] },
    { src: "/images/marble-wall-2.png", alt: "UV Marble Sheet TV Unit", tags: ["wall", "panels", "decorative"] },
    { src: "/images/marble-wall-3.jpg", alt: "Wavy UV Marble Pattern", tags: ["wall", "panels", "decorative"] },
    { src: "/images/ceiling-3.png", alt: "Bedroom Geometric Ceiling", tags: ["ceiling", "gypsum"] },
    { src: "/images/ceiling-4.png", alt: "Modern Cove Lighting", tags: ["ceiling", "gypsum"] },
    { src: "/images/ceiling-5.png", alt: "Ornate POP Ceiling with Fan", tags: ["ceiling", "gypsum"] }
  ];

  const images = category === "all" ? allImages : allImages.filter(img => img.tags.includes(category));

  return (
    <section className="sp-section sp-gallery-section">
      <div className="sp-container" style={{maxWidth: '100%', overflow: 'hidden'}}>
        <div className="sp-section-header sp-center" style={{marginBottom: '3rem'}}>
          <div className="sp-eyebrow-pill">OUR PORTFOLIO</div>
          <h2>Project Gallery</h2>
          <p className="sp-header-desc">A glimpse into our latest installations and premium material applications.</p>
        </div>
        
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper horizontal-gallery"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className={`gallery-slide shape-${idx % 4}`}>
              <div className="slide-content">
                <img src={img.src} alt={img.alt} />
                <div className="slide-overlay">
                  <h4>{img.alt}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectGallery;
