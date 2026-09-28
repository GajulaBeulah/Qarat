import os
import glob

files = glob.glob(r"c:\Users\DELL\OneDrive\Desktop\int\src\components\*.jsx") + glob.glob(r"c:\Users\DELL\OneDrive\Desktop\int\src\pages\*.jsx")

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('fluted-panel-new-1.jpg', 'new-upload-2.jpg')
    new_content = new_content.replace('fluted-panel-new-2.jpg', 'new-upload-3.jpg')
    
    if content != new_content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
