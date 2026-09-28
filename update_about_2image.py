import os
import re

css_path = r"c:\Users\DELL\OneDrive\Desktop\int\src\pages\ServiceDetail.css"

with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

start_idx = css_content.find("/* About Section */")
end_idx = css_content.find("/* Reviews Section */")

new_about_css = """/* About Section */
.sp-about-section {
  background-color: #FFFFFF;
  padding: 100px 0;
}

.sp-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.sp-about-content {
  display: flex;
  flex-direction: column;
}

.sp-about-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  color: #24211E;
  margin-bottom: 25px;
  line-height: 1.15;
}

.sp-about-content p {
  color: #6F6962;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 50px;
}

.sp-about-features {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.sp-feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
}

.sp-feature-item svg {
  color: #24211E;
}

.sp-feature-item span {
  font-size: 0.95rem;
  font-weight: 700;
  color: #24211E;
}

/* Image Composition */
.sp-about-images {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.sp-main-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.sp-circle-img {
  position: absolute;
  top: -40px;
  left: -40px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #FFFFFF;
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.sp-play-btn-box {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background-color: #FFFFFF;
  width: 90px;
  height: 90px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.sp-play-btn-box:hover {
  transform: scale(1.1);
}

@media (max-width: 992px) {
  .sp-about-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .sp-about-images {
    margin-top: 40px;
  }
  .sp-circle-img {
    top: -20px;
    left: -20px;
    width: 100px;
    height: 100px;
  }
  .sp-play-btn-box {
    bottom: -20px;
    right: -20px;
    width: 70px;
    height: 70px;
  }
}

"""

if start_idx != -1 and end_idx != -1:
    css_content = css_content[:start_idx] + new_about_css + css_content[end_idx:]
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)

directory = r"c:\Users\DELL\OneDrive\Desktop\int\src\pages"
pages = ["CeilingWork.jsx", "WallWork.jsx", "KitchenWork.jsx", "Gypsum.jsx", "Panels.jsx", "Decorative.jsx"]

for filename in pages:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    if "Clock" not in content or "Award" not in content:
        content = re.sub(r"import \{([^}]+)\} from 'lucide-react';", r"import {\1, Clock, Award } from 'lucide-react';", content)
        
    about_m = re.search(r'<div className="sp-bento-text-card">\s*<h2>(.*?)</h2>\s*<p>(.*?)</p>\s*<ul className="sp-bento-highlights">\s*(.*?)\s*</ul>', content, re.DOTALL)
    
    if not about_m:
        print("Not found in", filename)
        continue
        
    title = about_m.group(1).strip()
    desc = about_m.group(2).strip()
    highlights_html = about_m.group(3).strip()
    
    lis = re.findall(r'<li>(.*?)</li>', highlights_html)
    
    items = []
    for li in lis:
        text = re.sub(r'<.*?>', '', li).strip()
        items.append(text)
        
    if len(items) < 3:
        items = ["Quality Work", "On-Time Delivery", "Experienced Team"]
        
    new_jsx = f"""      {{/* 4. About Section */}}
      <section className="sp-about-section">
        <div className="sp-container sp-about-grid">
          
          <div className="sp-about-content">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="sp-about-features">
              <div className="sp-feature-item">
                <Award size={{36}} strokeWidth={{1.5}} />
                <span>{items[0]}</span>
              </div>
              <div className="sp-feature-item">
                <Clock size={{36}} strokeWidth={{1.5}} />
                <span>{items[1]}</span>
              </div>
              <div className="sp-feature-item">
                <Users size={{36}} strokeWidth={{1.5}} />
                <span>{items[2]}</span>
              </div>
            </div>
          </div>
          
          <div className="sp-about-images">
            <img src="/images/project2.jpg" alt="Interior Details" className="sp-main-img" />
            <img src="/images/project1.jpg" alt="Interior Decor" className="sp-circle-img" />
            <div className="sp-play-btn-box">
              <PlayCircle size={{40}} fill="#24211E" color="#FFF" />
            </div>
          </div>

        </div>
      </section>"""
      
    start_idx = content.find("{/* 4. About Section */}")
    end_idx = content.find("{/* 5. Customer Reviews */}")
    
    if start_idx != -1 and end_idx != -1:
        content = content[:start_idx] + new_jsx + "\n\n      " + content[end_idx:]
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

print("Done")
