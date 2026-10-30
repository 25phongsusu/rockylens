import os
from PIL import Image
from playwright.sync_api import sync_playwright

def find_best_alignment():
    offsets = [
        (-40, -18, 'lg:-translate-x-10 lg:-translate-y-4.5'), # current
        (-65, -10, 'translate(-65px, -10px)'),
        (-75, -5, 'translate(-75px, -5px)'),
        (-85, 0, 'translate(-85px, 0px)'),
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        file_url = 'file:///' + os.path.abspath('index.html').replace('\\', '/')
        page.goto(file_url, wait_until='networkidle')
        page.evaluate("if (typeof setHeroMode === 'function') setHeroMode('banner');")
        page.wait_for_timeout(500)

        for dx, dy, label in offsets:
            page.evaluate(f"""() => {{
                const el = document.getElementById('hero-lens-wrap');
                if (el) {{
                    el.style.transform = 'translate({dx}px, {dy}px) scale(1.02)';
                    el.style.transition = 'none';
                }}
            }}""")
            page.wait_for_timeout(300)
            
            hero = page.locator('#brand-hero')
            filename = f"test_align_{abs(dx)}_{abs(dy)}.png"
            full_path = os.path.join(r'C:\Users\phong\.gemini\antigravity\brain\11d1c40e-6691-4d4e-9d01-d6046bff9878', filename)
            hero.screenshot(path=full_path)
            
            # Crop around the hand and lens
            im = Image.open(full_path)
            w, h = im.size
            crop_box = (int(w * 0.54), int(h * 0.25), int(w * 0.85), int(h * 0.75))
            cropped = im.crop(crop_box)
            crop_name = f"crop_align_{abs(dx)}_{abs(dy)}.png"
            crop_path = os.path.join(r'C:\Users\phong\.gemini\antigravity\brain\11d1c40e-6691-4d4e-9d01-d6046bff9878', crop_name)
            cropped.save(crop_path)
            print(f"Saved {crop_name} for offset ({dx}, {dy})")

        browser.close()

if __name__ == '__main__':
    find_best_alignment()
