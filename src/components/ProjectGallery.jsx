import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ProjectGallery.css';

const ProjectGallery = ({ category = "all", title = "Project Gallery", subtitle = "A glimpse into our latest installations and premium material applications." }) => {
  const allImages = [
    { src: "/images/ceiling-1.png", alt: "Modern False Ceiling", tags: ["ceiling", "gypsum", "india-gypsum", "gyproc", "usg"] },
    { src: "/images/ceiling-2.png", alt: "Cove Lighting Ceiling", tags: ["ceiling", "gypsum", "india-gypsum", "gyproc"] },
    { src: "/images/ceiling-3.png", alt: "Bedroom Geometric Ceiling", tags: ["ceiling", "gypsum", "usg"] },
    { src: "/images/ceiling-4.png", alt: "Modern Cove Lighting", tags: ["ceiling", "gypsum", "gyproc"] },
    { src: "/images/ceiling-5.png", alt: "Ornate POP Ceiling with Fan", tags: ["ceiling", "gypsum", "india-gypsum"] },
    { src: "/images/ceiling-hero-new.png", alt: "Luxury Ceiling", tags: ["ceiling", "gypsum", "gyproc", "usg"] },
    { src: "/images/gypsum-partition.png", alt: "Gypsum Partition", tags: ["ceiling", "gypsum", "india-gypsum", "gyproc", "usg"] },
    { src: "/images/gypsum-tiles.png", alt: "Gypsum Ceiling Tiles", tags: ["ceiling", "gypsum", "gypsum-tiles"] },
    { src: "/images/gypsum-gyproc.png", alt: "Gyproc Board", tags: ["gyproc"] },
    { src: "/images/gypsum-usg.jpg", alt: "USG Boral Board", tags: ["usg"] },
    { src: "/images/gypsum-india.jpg", alt: "India Gypsum Board", tags: ["india-gypsum"] },
    
    { src: "/images/gallery-1.jpg", alt: "Kitchen View 1", tags: ["kitchen"] },
    { src: "/images/gallery-2.png", alt: "Kitchen View 2", tags: ["kitchen"] },
    { src: "/images/gallery-3.png", alt: "Wardrobe", tags: ["kitchen"] },
    { src: "/images/gallery-4.png", alt: "Kitchen View 3", tags: ["kitchen"] },
    { src: "/images/kitchen-4.png", alt: "Modular Kitchen", tags: ["kitchen"] },
    { src: "/images/kitchen-new-grey.jpg", alt: "Grey Modular Kitchen", tags: ["kitchen"] },
    
    { src: "/images/pvc-wall.png", alt: "PVC Wall Panel", tags: ["wall", "panels", "pvc"] },
    { src: "/images/pvc-1.png", alt: "Fluted PVC Panel", tags: ["wall", "panels", "pvc", "fluted"] },
    { src: "/images/pvc-2.jpg", alt: "Wood finish PVC", tags: ["wall", "panels", "pvc", "wpc"] },
    { src: "/images/tv-unit.jpg", alt: "Fluted Panel TV Unit", tags: ["wall", "panels", "decorative", "fluted", "wpc"] },
    { src: "/images/marble-wall-1.jpg", alt: "UV Marble Wall Design", tags: ["wall", "decorative", "uv-marble"] },
    { src: "/images/marble-wall-2.png", alt: "UV Marble Sheet TV Unit", tags: ["wall", "decorative", "uv-marble"] },
    { src: "/images/marble-wall-3.jpg", alt: "Wavy UV Marble Pattern", tags: ["wall", "decorative", "uv-marble"] },
    { src: "/images/uv-marble-supply-new.jpg", alt: "Marble Supply", tags: ["decorative", "uv-marble"] },
    { src: "/images/new-upload-1.jpg", alt: "Decorative Wall 1", tags: ["wall", "panels", "fluted", "wpc"] },
    { src: "/images/new-upload-2.jpg", alt: "Decorative Wall 2", tags: ["wall", "decorative", "uv-marble"] },
    { src: "/images/new-upload-3.jpg", alt: "Decorative Space", tags: ["wall", "decorative", "wallpaper"] },
    { src: "/images/new-upload-4.jpg", alt: "Decorative Space 2", tags: ["wall", "decorative", "wallpaper"] },
    { src: "/images/project1.jpg", alt: "Wallpaper Pattern", tags: ["wallpaper"] },
    { src: "/images/project2.jpg", alt: "Wallpaper Texture", tags: ["wallpaper"] },
    { src: "/images/project3.jpg", alt: "Wallpaper Installation", tags: ["wallpaper"] }
  ];

  const images = category === "all" ? allImages : allImages.filter(img => img.tags.includes(category));

  if (images.length === 0) return null;

  return (
    <section className="sp-section sp-gallery-section">
      <div className="sp-container" style={{maxWidth: '100%', overflow: 'hidden'}}>
        <div className="sp-section-header sp-center" style={{marginBottom: '3rem'}}>
          <div className="sp-eyebrow-pill">OUR PORTFOLIO</div>
          <h2>{title}</h2>
          <p className="sp-header-desc">{subtitle}</p>
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
