import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectGallery.css';

const ProjectGallery = ({ category = "all" }) => {
  const allImages = [
    { src: "/images/ceiling-1.png", alt: "Modern False Ceiling", tags: ["ceiling"] },
    { src: "/images/ceiling-2.png", alt: "Cove Lighting Ceiling", tags: ["ceiling"] },
    { src: "/images/ceiling-3.png", alt: "Bedroom Geometric Ceiling", tags: ["ceiling"] },
    { src: "/images/ceiling-4.png", alt: "Modern Cove Lighting", tags: ["ceiling"] },
    { src: "/images/ceiling-5.png", alt: "Ornate POP Ceiling with Fan", tags: ["ceiling"] },
    { src: "/images/ceiling-hero-new.png", alt: "Luxury Ceiling", tags: ["ceiling"] },
    { src: "/images/gypsum-partition.png", alt: "Gypsum Partition", tags: ["ceiling"] },
    { src: "/images/india-gypsum-stack.png", alt: "India Gypsum Board", tags: ["gypsum"] },
    { src: "/images/gyproc-stack.png", alt: "Gyproc Board Stack", tags: ["gypsum"] },
    { src: "/images/metal-channels.jpg", alt: "Metal Framing Channels", tags: ["gypsum"] },
    { src: "/images/gypsum-tiles-stack.png", alt: "Gypsum Ceiling Tiles Stack", tags: ["gypsum"] },
    { src: "/images/gyproc-tile.jpg", alt: "Gyproc PVC Laminated Tile", tags: ["gypsum"] },
    { src: "/images/gypsum-usg.jpg", alt: "USG Boral Board", tags: ["gypsum"] },

    { src: "/images/gallery-1.jpg", alt: "Kitchen View 1", tags: ["kitchen"] },
    { src: "/images/gallery-2.png", alt: "Kitchen View 2", tags: ["kitchen"] },
    { src: "/images/gallery-3.png", alt: "Wardrobe", tags: ["kitchen"] },
    { src: "/images/gallery-4.png", alt: "Kitchen View 3", tags: ["kitchen"] },
    { src: "/images/kitchen-4.png", alt: "Modular Kitchen", tags: ["kitchen"] },
    { src: "/images/kitchen-new-grey.jpg", alt: "Grey Modular Kitchen", tags: ["kitchen"] },

    { src: "/images/pvc-wall.png", alt: "PVC Wall Panel", tags: ["panels"] },
    { src: "/images/pvc-1.png", alt: "Fluted PVC Panel", tags: ["panels"] },
    { src: "/images/pvc-2.jpg", alt: "Wood finish PVC", tags: ["panels"] },
    { src: "/images/new-upload-1.jpg", alt: "WPC Fluted Panels", tags: ["panels"] },
    { src: "/images/tv-unit.jpg", alt: "Fluted Panel TV Unit", tags: ["wall"] },
    { src: "/images/marble-wall-1.jpg", alt: "UV Marble Wall Design", tags: ["decorative"] },
    { src: "/images/marble-wall-2.png", alt: "UV Marble Sheet TV Unit", tags: ["wall"] },
    { src: "/images/marble-wall-3.jpg", alt: "Wavy UV Marble Pattern", tags: ["decorative"] },
    { src: "/images/uv-marble-supply-new.jpg", alt: "Floral Wallpaper Rolls", tags: ["decorative"] },
    { src: "/images/new-upload-2.jpg", alt: "Decorative Wall 2", tags: ["wall"] },
    { src: "/images/new-upload-3.jpg", alt: "Decorative Space", tags: ["wall"] },
    { src: "/images/new-upload-4.jpg", alt: "Decorative Space 2", tags: ["wall"] }
  ];

  const images = category === "all" ? allImages : allImages.filter(img => img.tags.includes(category));

  return (
    <section className="sp-section sp-gallery-section">
      <div className="sp-container" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <div className="sp-section-header sp-center" style={{ marginBottom: '3rem' }}>
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
            <SwiperSlide key={idx} className="gallery-slide">
              <div className="slide-content">
                <img src={img.src} alt={img.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectGallery;
