import sys
import os
import time
from playwright.sync_api import sync_playwright

sys.stdout.reconfigure(encoding='utf-8')

artifact_dir = r"C:\Users\phong\.gemini\antigravity\brain\11d1c40e-6691-4d4e-9d01-d6046bff9878"

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1440, 'height': 900})
        page = context.new_page()

        # 1. Test Next.js localhost:3000 Mode 1 (default)
        print("Testing localhost:3000 default (Mode 1: Tối giản)...")
        page.goto("http://localhost:3000/", wait_until="networkidle")
        time.sleep(1)
        hero = page.locator("#brand-hero")
        hero.screenshot(path=os.path.join(artifact_dir, "hero_mode1_nextjs.png"))
        print("✓ Captured hero_mode1_nextjs.png")

        # 2. Click Mode 2 button on Next.js
        print("Switching to Mode 2 on Next.js...")
        btn_mode2 = page.locator("button:has-text('Chế độ 2: Nền Banner')")
        btn_mode2.click()
        time.sleep(1)
        hero.screenshot(path=os.path.join(artifact_dir, "hero_mode2_nextjs.png"))
        print("✓ Captured hero_mode2_nextjs.png")

        # 3. Test static index.html via direct file URL
        index_path = os.path.abspath("index.html").replace("\\", "/")
        print(f"Testing static index.html at file:///{index_path}...")
        page.goto(f"file:///{index_path}")
        time.sleep(1)
        static_hero = page.locator("#brand-hero")
        static_hero.screenshot(path=os.path.join(artifact_dir, "hero_mode1_static.png"))
        print("✓ Captured hero_mode1_static.png")

        print("Switching to Mode 2 on static index.html...")
        btn_static_mode2 = page.locator("#btn-hero-ban")
        btn_static_mode2.click()
        time.sleep(1)
        static_hero.screenshot(path=os.path.join(artifact_dir, "hero_mode2_static.png"))
        print("✓ Captured hero_mode2_static.png")

        browser.close()
        print("All local tests completed successfully!")

if __name__ == "__main__":
    main()
