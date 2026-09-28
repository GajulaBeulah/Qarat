import os
import re
import glob

components = glob.glob(r"c:\Users\DELL\OneDrive\Desktop\int\src\components\*.jsx")
pages = glob.glob(r"c:\Users\DELL\OneDrive\Desktop\int\src\pages\*.jsx")

files = components + pages

def smart_replace(content):
    # BusinessIntro
    content = content.replace('src="/images/project1.jpg" alt="Ceiling Solutions"', 'src="/images/ceiling-4.png" alt="Ceiling Solutions"')
    content = content.replace('src="/images/project2.jpg" alt="Material Supply"', 'src="/images/wpc-panel-new.png" alt="Material Supply"')
    content = content.replace('src="/images/project3.jpg" alt="Modular Kitchen"', 'src="/images/kitchen-4.png" alt="Modular Kitchen"')
    content = content.replace('src="/images/project4.jpg" alt="Decorative Solutions"', 'src="/images/fluted-panel-new-1.jpg" alt="Decorative Solutions"')
    
    # Hero
    content = content.replace('src="/images/project1.jpg" alt="Luxury Bedroom"', 'src="/images/ceiling-3.png" alt="Luxury Bedroom"')
    content = content.replace('src="/images/project2.jpg" alt="Modular Kitchen"', 'src="/images/kitchen-4.png" alt="Modular Kitchen"')
    content = content.replace('src="/images/project4.jpg" alt="False Ceiling"', 'src="/images/ceiling-5.png" alt="False Ceiling"')
    content = content.replace('src="/images/project3.jpg" alt="Wall Paneling"', 'src="/images/fluted-panel-new-2.jpg" alt="Wall Paneling"')
    content = content.replace('src="/images/project1.jpg" alt="Interior Decor"', 'src="/images/uv-marble-supply-new.jpg" alt="Interior Decor"')
    
    # InteriorWorkHome
    content = content.replace('src="/images/project2.jpg" alt="Ceiling Work"', 'src="/images/ceiling-4.png" alt="Ceiling Work"')
    content = content.replace('src="/images/project3.jpg" alt="Wall & Decorative Work"', 'src="/images/fluted-panel-new-1.jpg" alt="Wall & Decorative Work"')
    content = content.replace('src="/images/project4.jpg" alt="Modular Kitchen & Furniture"', 'src="/images/kitchen-4.png" alt="Modular Kitchen & Furniture"')
    
    # MaterialSupplyHome
    content = content.replace('src="/images/project1.jpg" alt="Gypsum Boards & Ceiling"', 'src="/images/ceiling-5.png" alt="Gypsum Boards & Ceiling"')
    content = content.replace('src="/images/project3.jpg" alt="Panels"', 'src="/images/wpc-panel-new.png" alt="Panels"')
    content = content.replace('src="/images/project4.jpg" alt="Decorative Materials"', 'src="/images/uv-marble-supply-new.jpg" alt="Decorative Materials"')
    
    # ProjectsShowcase
    content = content.replace('src="/images/project4.jpg" alt="Luxury Residence"', 'src="/images/ceiling-hero-new.png" alt="Luxury Residence"')
    content = content.replace('src="/images/project1.jpg" alt="Modern Office"', 'src="/images/fluted-panel-new-2.jpg" alt="Modern Office"')
    content = content.replace('src="/images/project3.jpg" alt="Retail Showroom"', 'src="/images/uv-marble-supply-new.jpg" alt="Retail Showroom"')
    
    # About.jsx main images
    content = content.replace('src="/images/project2.jpg" alt="Qarat Interior Execution"', 'src="/images/ceiling-hero-new.png" alt="Qarat Interior Execution"')
    content = content.replace('src="/images/project1.jpg" alt="Interior Work"', 'src="/images/fluted-panel-new-2.jpg" alt="Interior Work"')
    content = content.replace('src="/images/project2.jpg" alt="Material Supply"', 'src="/images/uv-marble-supply-new.jpg" alt="Material Supply"')
    
    # Projects page (projectData array)
    content = re.sub(r"image:\s*'/images/project4\.jpg'", r"image: '/images/uv-marble-supply-new.jpg'", content)
    content = re.sub(r"image:\s*'/images/project3\.jpg'", r"image: '/images/kitchen-4.png'", content)
    content = re.sub(r"image:\s*'/images/project1\.jpg'", r"image: '/images/fluted-panel-new-1.jpg'", content)
    content = re.sub(r"image:\s*'/images/project2\.jpg'", r"image: '/images/ceiling-3.png'", content)

    # Fix any lingering project[1-4].jpg that might be hero backgrounds in WallWork, Panels, etc.
    content = content.replace('backgroundImage: `url(/images/project1.jpg)`', 'backgroundImage: `url(/images/fluted-panel-new-1.jpg)`')
    content = content.replace('backgroundImage: `url(/images/project2.jpg)`', 'backgroundImage: `url(/images/ceiling-3.png)`')
    content = content.replace('backgroundImage: `url(/images/project3.jpg)`', 'backgroundImage: `url(/images/kitchen-4.png)`')
    content = content.replace('backgroundImage: `url(/images/project4.jpg)`', 'backgroundImage: `url(/images/uv-marble-supply-new.jpg)`')

    # Final fallback for any other project[1-4].jpg lingering around
    content = content.replace('src="/images/project1.jpg"', 'src="/images/ceiling-hero-new.png"')
    content = content.replace('src="/images/project2.jpg"', 'src="/images/kitchen-4.png"')
    content = content.replace('src="/images/project3.jpg"', 'src="/images/fluted-panel-new-1.jpg"')
    content = content.replace('src="/images/project4.jpg"', 'src="/images/uv-marble-supply-new.jpg"')

    return content

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()
    
    modified = smart_replace(original)
    
    if original != modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(modified)
