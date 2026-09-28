import glob

files = glob.glob(r"c:\Users\DELL\OneDrive\Desktop\int\src\components\*.jsx")

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('wpc-panel-new.png', 'new-upload-1.jpg')
    
    if content != new_content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
