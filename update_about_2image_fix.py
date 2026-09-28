import os
import re

directory = r"c:\Users\DELL\OneDrive\Desktop\int\src\pages"
pages = ["CeilingWork.jsx", "WallWork.jsx", "KitchenWork.jsx", "Gypsum.jsx", "Panels.jsx", "Decorative.jsx"]

for filename in pages:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    if "Clock" not in content or "Award" not in content:
        content = re.sub(r"import \{([^}]+)\} from 'lucide-react';", r"import {\1, Clock, Award } from 'lucide-react';", content)
        
    about_m = re.search(r'<div className="sp-about-content">\s*<h2>(.*?)</h2>\s*<p>\s*([\s\S]*?)\s*</p>\s*<ul className="sp-highlights">\s*(.*?)\s*</ul>', content, re.DOTALL)
    
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
