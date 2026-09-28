import os
import re

css_path = r"c:\Users\DELL\OneDrive\Desktop\int\src\pages\ServiceDetail.css"

with open(css_path, "r", encoding="utf-8") as f:
    css_content = f.read()

start_idx = css_content.find("/* About Section */")
end_idx = css_content.find("/* Reviews Section */")

if start_idx != -1 and end_idx != -1:
    new_about_css = """/* About Section */
.sp-about-section {
  background-color: #FFFFFF;
  padding: 80px 0;
}

.sp-bento-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 350px 300px;
  gap: 20px;
  width: 100%;
}

.sp-bento-card {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.sp-bento-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.sp-bento-card:hover img {
  transform: scale(1.05);
}

.sp-bento-text-card {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 20px 50px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}

.sp-bento-text-card h2 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: #24211E;
  margin-bottom: 20px;
  line-height: 1.2;
}

.sp-bento-text-card p {
  color: #6F6962;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 30px;
}

.sp-bento-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.sp-bento-highlights li {
  color: #24211E;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.sp-bento-highlights li::before {
  content: '✓';
  color: #B79A6B;
  font-weight: bold;
}

.sp-bento-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  background-color: #24211E;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  width: fit-content;
  transition: background-color 0.3s ease;
}

.sp-bento-btn:hover {
  background-color: #4A4640;
}

.sp-bento-img-1 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background-color: #F7F4EF;
}

.sp-bento-img-2 {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background-color: #E8E5E1;
}

.sp-bento-img-3 {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: #F0EDE8;
}

.sp-bento-img-4 {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background-color: #EAE7E2;
}

@media (max-width: 992px) {
  .sp-bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  .sp-bento-text-card {
    grid-column: 1 / 3;
    grid-row: auto;
    padding: 20px 0;
  }
  .sp-bento-img-1 {
    grid-column: 1 / 2;
    grid-row: auto;
    height: 250px;
  }
  .sp-bento-img-2 {
    grid-column: 2 / 3;
    grid-row: auto;
    height: 250px;
  }
  .sp-bento-img-3 {
    grid-column: 1 / 3;
    grid-row: auto;
    height: 300px;
  }
  .sp-bento-img-4 {
    grid-column: 1 / 3;
    grid-row: auto;
    height: 300px;
  }
}

"""
    css_content = css_content[:start_idx] + new_about_css + css_content[end_idx:]
    with open(css_path, "w", encoding="utf-8") as f:
        f.write(css_content)


directory = r"c:\Users\DELL\OneDrive\Desktop\int\src\pages"
pages = ["CeilingWork.jsx", "WallWork.jsx", "KitchenWork.jsx", "Gypsum.jsx", "Panels.jsx", "Decorative.jsx"]

for filename in pages:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    about_text_m = re.search(r'<div className="sp-about-content">\s*<h2>(.*?)</h2>\s*<p>\s*([\s\S]*?)\s*</p>\s*<ul className="sp-highlights">\s*(.*?)\s*</ul>', content)
    
    if not about_text_m:
        print(f"Could not find about content in {filename}")
        continue
        
    title = about_text_m.group(1).strip()
    desc = about_text_m.group(2).strip()
    highlights_html = about_text_m.group(3).strip()
    
    new_about = f"""      {{/* 4. About Section */}}
      <section className="sp-about-section">
        <div className="sp-container">
          <div className="sp-bento-grid">
            
            <div className="sp-bento-text-card">
              <h2>{title}</h2>
              <p>{desc}</p>
              <ul className="sp-bento-highlights">
                {highlights_html}
              </ul>
              <Link to="/get-quote" className="sp-bento-btn">Get Quote</Link>
            </div>
            
            <div className="sp-bento-card sp-bento-img-1">
              <img src="/images/project1.jpg" alt="Interior Details" />
            </div>
            
            <div className="sp-bento-card sp-bento-img-2">
              <img src="/images/project3.jpg" alt="Interior Details" />
            </div>
            
            <div className="sp-bento-card sp-bento-img-3">
              <img src="/images/project2.jpg" alt="Interior Details" />
            </div>
            
            <div className="sp-bento-card sp-bento-img-4">
              <img src="/images/project4.jpg" alt="Interior Details" />
            </div>
            
          </div>
        </div>
      </section>"""
      
    content = re.sub(r'\{\/\*\ 4\.\ About\ Section\ \*\/\}.*?(?=\{\/\*\ 5\.\ Customer\ Reviews)', new_about + '\n\n', content, flags=re.DOTALL)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
