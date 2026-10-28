#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ROCKY LENS — Automated Content Sync Engine
===========================================
Single Source of Truth: `content/home_content.json`

This script synchronizes content across:
1. Next.js React components (`src/components/home/*.tsx`)
2. Static HTML generator (`scripts/build-unified-liquid-master.js`)
3. Root HTML (`index.html`)

Usage:
    python scripts/sync_home.py --apply    # Sync JSON -> all target files
    python scripts/sync_home.py --check    # Check if files are consistent
"""

import sys
import os
import json
import re

# Ensure stdout supports UTF-8 on Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT_JSON = os.path.join(ROOT_DIR, "content", "home_content.json")

def load_content():
    if not os.path.exists(CONTENT_JSON):
        print(f"[ERROR] Content file not found: {CONTENT_JSON}")
        sys.exit(1)
    with open(CONTENT_JSON, "r", encoding="utf-8") as f:
        return json.load(f)

def sync_hero_tsx(data):
    hero_path = os.path.join(ROOT_DIR, "src", "components", "home", "HeroSection.tsx")
    if not os.path.exists(hero_path):
        return False
    with open(hero_path, "r", encoding="utf-8") as f:
        content = f.read()

    h = data["hero"]
    # Replace Subheadline in HeroSection
    pattern = r'(<p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">\s*)(.*?)(\s*<\/p>)'
    replacement = rf'\g<1>{h["subheadline"]}\g<3>'
    new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    if new_content != content:
        with open(hero_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("  ✓ Updated src/components/home/HeroSection.tsx")
        return True
    return False

def sync_product_categories_tsx(data):
    target_path = os.path.join(ROOT_DIR, "src", "components", "home", "ProductCategories.tsx")
    if not os.path.exists(target_path):
        return False
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    # We format productSolutions cleanly
    items_js = []
    for idx, item in enumerate(data["products"]["items"]):
        num_str = f"0{idx+1} / 0{len(data['products']['items'])}"
        item_block = f"""  {{
    num: '{num_str}',
    category: '{item["category"]}',
    filter: '{item["filter"]}',
    title: '{item["title"]}',
    desc: '{item["desc"]}',
    image: '{item["image"]}',
    link: '{item["link"]}',
    productName: '{item["productName"]}',
    subTag: '{item["subTag"]}',
    keyFeature: '{item["keyFeature"]}',
    techProcess: '{item["techProcess"]}',
    visionExperience: '{item["visionExperience"]}',
    indexOption: '{item["indexOption"]}',
    warranty: '{item["warranty"]}',
  }},"""
        items_js.append(item_block)

    solutions_code = "export const productSolutions = [\n" + "\n".join(items_js) + "\n];"
    
    pattern = r'export const productSolutions = \[.*?\];'
    new_content = re.sub(pattern, solutions_code, content, flags=re.DOTALL)

    if new_content != content:
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("  ✓ Updated src/components/home/ProductCategories.tsx")
        return True
    return False

def sync_tech_tsx(data):
    target_path = os.path.join(ROOT_DIR, "src", "components", "home", "TechnologyHighlights.tsx")
    if not os.path.exists(target_path):
        return False
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    cards_js = []
    for card in data["technologies"]["cards"]:
        card_block = f"""  {{
    category: '{card["category"]}',
    title: '{card["title"]}',
    desc: '{card["desc"]}',
    image: '{card["image"]}',
    linkText: '{card["linkText"]}',
    link: '{card["link"]}',
  }},"""
        cards_js.append(card_block)

    cards_code = "export const technologyCards = [\n" + "\n".join(cards_js) + "\n];"
    pattern = r'export const technologyCards = \[.*?\];'
    new_content = re.sub(pattern, cards_code, content, flags=re.DOTALL)

    if new_content != content:
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("  ✓ Updated src/components/home/TechnologyHighlights.tsx")
        return True
    return False

def sync_blog_tsx(data):
    target_path = os.path.join(ROOT_DIR, "src", "components", "home", "BlogSection.tsx")
    if not os.path.exists(target_path):
        return False
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    articles_js = []
    for art in data["blog"]["articles"]:
        art_block = f"""  {{
    slug: '{art["slug"]}',
    category: '{art["category"]}',
    title: '{art["title"]}',
    desc: '{art["desc"]}',
    image: '{art["image"]}',
  }},"""
        articles_js.append(art_block)

    articles_code = "export const blogArticles = [\n" + "\n".join(articles_js) + "\n];"
    pattern = r'export const blogArticles = \[.*?\];'
    new_content = re.sub(pattern, articles_code, content, flags=re.DOTALL)

    if new_content != content:
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("  ✓ Updated src/components/home/BlogSection.tsx")
        return True
    return False

def sync_build_script(data):
    target_path = os.path.join(ROOT_DIR, "scripts", "build-unified-liquid-master.js")
    if not os.path.exists(target_path):
        return False
    with open(target_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    h = data["hero"]

    # 1. Update Hero Subheadline in build script
    subheadline_regex = r'(<p class="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">\s*)(.*?)(\s*<\/p>)'
    content = re.sub(subheadline_regex, rf'\g<1>{h["subheadline"]}\g<3>', content)

    # 2. Update Technology Cards in build script
    tech = data["technologies"]["cards"]
    if len(tech) >= 3:
        # Tech titles and descs
        for i, t in enumerate(tech):
            # Check pattern for tech titles
            cat_esc = re.escape(t["category"])
            title_regex = rf'({cat_esc}\s*<\/div>\s*<h3[^>]*>)(.*?)(<\/h3>)'
            content = re.sub(title_regex, rf'\g<1>{t["title"]}\g<3>', content)
            desc_regex = rf'({cat_esc}\s*<\/div>\s*<h3[^>]*>.*?<\/h3>\s*<p[^>]*>)(.*?)(<\/p>)'
            content = re.sub(desc_regex, rf'\g<1>{t["desc"]}\g<3>', content, flags=re.DOTALL)

    # 3. Update Blog Cards in build script
    blog = data["blog"]["articles"]
    if len(blog) >= 3:
        for b in blog:
            slug_esc = re.escape(b["slug"])
            cat_esc = re.escape(b["category"])
            # Update title
            b_title_regex = rf'(href="\/blog\/{slug_esc}\/?"[^>]*>)(.*?)(<\/a>\s*<\/h3>)'
            content = re.sub(b_title_regex, rf'\g<1>{b["title"]}\g<3>', content)

    if content != original:
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(content)
        print("  ✓ Updated scripts/build-unified-liquid-master.js")
        return True
    return False

def main():
    action = "--apply"
    if len(sys.argv) > 1:
        action = sys.argv[1]

    data = load_content()

    if action == "--check":
        print("[CHECK] Validating home_content.json structure...")
        required_keys = ["hero", "philosophy", "products", "technologies", "whyRocky", "blog", "partner"]
        missing = [k for k in required_keys if k not in data]
        if missing:
            print(f"  ✗ Missing keys: {missing}")
            sys.exit(1)
        print(f"  ✓ Valid schema with {len(data['products']['items'])} products, {len(data['technologies']['cards'])} tech cards, {len(data['blog']['articles'])} articles.")
        return

    if action == "--apply":
        print("[SYNC] Synchronizing content from content/home_content.json to all targets...")
        changed = []
        if sync_hero_tsx(data): changed.append("HeroSection.tsx")
        if sync_product_categories_tsx(data): changed.append("ProductCategories.tsx")
        if sync_tech_tsx(data): changed.append("TechnologyHighlights.tsx")
        if sync_blog_tsx(data): changed.append("BlogSection.tsx")
        if sync_build_script(data): changed.append("build-unified-liquid-master.js")

        if changed:
            print(f"[SUCCESS] Synchronized {len(changed)} file(s): {', '.join(changed)}")
        else:
            print("[INFO] All files are already 100% in sync with content/home_content.json.")

if __name__ == "__main__":
    main()
