import os
import re

files = {
    'CeilingWork.jsx': ('/images/ceiling-3.png', '/images/ceiling-4.png'),
    'WallWork.jsx': ('/images/new-upload-2.jpg', '/images/new-upload-3.jpg'),
    'KitchenWork.jsx': ('/images/kitchen-new-grey.jpg', '/images/gallery-2.png'),
    'Panels.jsx': ('/images/new-upload-1.jpg', '/images/pvc-wall.png'),
    'Gypsum.jsx': ('/images/gypsum-gyproc.png', '/images/ceiling-5.png'),
    'Decorative.jsx': ('/images/uv-marble-supply-new.jpg', '/images/marble-wall-1.jpg')
}

for filename, (main_img, circle_img) in files.items():
    filepath = os.path.join('c:/Users/DELL/OneDrive/Desktop/int/src/pages', filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace main image
    content = re.sub(r'src="[^"]*"(.*?className="sp-main-img")', f'src="{main_img}"\\1', content)
    
    # Replace circle image
    content = re.sub(r'src="[^"]*"(.*?className="sp-circle-img")', f'src="{circle_img}"\\1', content)
    
    with open(filepath, 'w') as f:
        f.write(content)
