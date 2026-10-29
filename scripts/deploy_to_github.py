#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ROCKY LENS — Automated Deployment Engine (Local -> Rocky-Deploy -> GitHub)
========================================================================
This tool builds the Next.js static site + Master Landing Page from the
local source workspace (`Rocky`), packages everything into `Rocky-Deploy`,
and pushes clean static artifacts to GitHub Pages (`origin/main`).

Usage:
    python scripts/deploy_to_github.py           # Build and sync to Rocky-Deploy
    python scripts/deploy_to_github.py --push    # Build, sync, commit, and git push!
"""

import sys
import os
import shutil
import subprocess
import datetime
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEPLOY_DIR = os.path.abspath(os.path.join(ROOT_DIR, "..", "Rocky-Deploy"))
OUT_DIR = os.path.join(ROOT_DIR, "out")
BASE_PATH = os.environ.get("NEXT_PUBLIC_BASE_PATH", "/rockylens")

DEPLOY_FOLDERS = [
    "blog",
    "danh-cho-doi-tac",
    "kham-pha-trong-kinh",
    "cong-nghe",
    "rx-lab",
    "trong-kinh",
    "lien-he",
    "ve-chung-toi",
    "_next",
    "assets",
    "images",
    "documents",
    "uploads"
]

DEPLOY_FILES = [
    "404.html",
    "robots.txt",
    "sitemap.xml"
]

SOURCE_ITEMS_TO_REMOVE_FROM_DEPLOY = [
    "src",
    "content",
    "docs",
    "scripts",
    "node_modules",
    ".agents",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "next.config.ts",
    "tailwind.config.ts",
    "postcss.config.js",
    "next-env.d.ts",
    "preview.png",
    "AI_AGENT_INSTRUCTIONS.md",
    "README.md",
    "skills-lock.json",
    "SITEMAP.md"
]

def run_cmd(cmd, cwd=ROOT_DIR):
    print(f"  > Executing: {cmd}")
    res = subprocess.run(cmd, shell=True, cwd=cwd)
    if res.returncode != 0:
        print(f"[ERROR] Command failed with code {res.returncode}: {cmd}")
        sys.exit(res.returncode)

def fix_asset_paths(content):
    if not BASE_PATH:
        return content
    # Replace un-prefixed static asset paths inside quotes, brackets or equals:
    p1 = re.compile(r'(?<=["\'(=])/(images|documents|icons|uploads|assets)/')
    content = p1.sub(f'{BASE_PATH}/\\1/', content)
    # Replace escaped JSON strings in Next.js payloads:
    p2 = re.compile(r'\\"/(images|documents|icons|uploads|assets)/')
    content = p2.sub(f'\\"{BASE_PATH}/\\1/', content)
    return content

def process_directory_files(target_dir):
    if not os.path.exists(target_dir):
        return
    for root, dirs, files in os.walk(target_dir):
        for f in files:
            if f.endswith(".html") or f.endswith(".txt"):
                file_path = os.path.join(root, f)
                with open(file_path, "r", encoding="utf-8", errors="ignore") as rf:
                    orig = rf.read()
                fixed = fix_asset_paths(orig)
                if fixed != orig:
                    with open(file_path, "w", encoding="utf-8") as wf:
                        wf.write(fixed)

def main():
    should_push = "--push" in sys.argv

    print("=======================================================")
    print("🚀 ROCKY LENS — BUILD & DEPLOY ENGINE")
    print(f"Source Directory: {ROOT_DIR}")
    print(f"Deploy Directory: {DEPLOY_DIR}")
    print("=======================================================\n")

    if not os.path.exists(DEPLOY_DIR):
        print(f"[ERROR] Deploy directory does not exist: {DEPLOY_DIR}")
        sys.exit(1)

    # 1. Sync Content
    print("[1/5] Synchronizing content from content/home_content.json...")
    run_cmd(f'"{sys.executable}" scripts/sync_home.py --apply')

    # 2. Build Master Static HTML
    print("\n[2/5] Generating Master Static Landing Page (index.html)...")
    run_cmd("node scripts/build-unified-liquid-master.js")

    # 3. Next.js Static Export
    print("\n[3/5] Running Next.js static build (output -> out/)...")
    build_cmd = "npx.cmd next build" if sys.platform == "win32" else "npx next build"
    run_cmd(build_cmd)

    # 4. Sync out/ & static assets to Rocky-Deploy
    print("\n[4/5] Copying compiled artifacts to Rocky-Deploy...")

    # Clean existing deploy folders in Rocky-Deploy
    for folder in DEPLOY_FOLDERS:
        dest_folder = os.path.join(DEPLOY_DIR, folder)
        if os.path.exists(dest_folder):
            shutil.rmtree(dest_folder)
        src_folder = os.path.join(OUT_DIR, folder)
        if os.path.exists(src_folder):
            shutil.copytree(src_folder, dest_folder)
            print(f"  ✓ Synced folder: {folder}")
        # If folder exists in ROOT_DIR (like assets or images), also overlay to ensure completeness:
        root_src_folder = os.path.join(ROOT_DIR, folder)
        if os.path.exists(root_src_folder) and root_src_folder != dest_folder:
            shutil.copytree(root_src_folder, dest_folder, dirs_exist_ok=True)
            print(f"  ✓ Overlaid root folder: {folder}")

    # Copy files
    for file_name in DEPLOY_FILES:
        src_file = os.path.join(OUT_DIR, file_name)
        dest_file = os.path.join(DEPLOY_DIR, file_name)
        if os.path.exists(src_file):
            shutil.copy2(src_file, dest_file)
            print(f"  ✓ Synced file: {file_name}")

    # Copy index.html from ROOT_DIR
    src_index = os.path.join(ROOT_DIR, "index.html")
    dest_index = os.path.join(DEPLOY_DIR, "index.html")
    if os.path.exists(src_index):
        shutil.copy2(src_index, dest_index)
        print("  ✓ Synced file: index.html")

    # Create .nojekyll for GitHub Pages
    nojekyll_path = os.path.join(DEPLOY_DIR, ".nojekyll")
    with open(nojekyll_path, "w", encoding="utf-8") as f:
        f.write("")
    print("  ✓ Created .nojekyll")

    # Remove lingering source files from Rocky-Deploy if any exist
    for item in SOURCE_ITEMS_TO_REMOVE_FROM_DEPLOY:
        p = os.path.join(DEPLOY_DIR, item)
        if os.path.exists(p):
            if os.path.isdir(p):
                shutil.rmtree(p)
            else:
                os.remove(p)

    # Post-process paths for GitHub Pages subfolder (/rockylens)
    print("  ✓ Patching asset paths for GitHub Pages...")
    for folder in ["blog", "danh-cho-doi-tac", "kham-pha-trong-kinh", "cong-nghe", "trong-kinh", "lien-he", "ve-chung-toi"]:
        process_directory_files(os.path.join(DEPLOY_DIR, folder))
    if os.path.exists(dest_index):
        with open(dest_index, "r", encoding="utf-8", errors="ignore") as f:
            c = f.read()
        fixed_c = fix_asset_paths(c)
        if fixed_c != c:
            with open(dest_index, "w", encoding="utf-8") as f:
                f.write(fixed_c)

    print("\n[SUCCESS] Rocky-Deploy is fully updated and ready for GitHub Pages!")

    # 5. Git commit & push if requested
    if should_push:
        print("\n[5/5] Pushing changes to GitHub Pages (origin/main)...")
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        run_cmd("git add -A", cwd=DEPLOY_DIR)
        res = subprocess.run('git diff-index --quiet HEAD', shell=True, cwd=DEPLOY_DIR)
        if res.returncode == 0:
            print("  ℹ No new changes to commit in Rocky-Deploy.")
        else:
            run_cmd(f'git commit -m "deploy: update static site at {now_str}"', cwd=DEPLOY_DIR)
            run_cmd("git push origin main", cwd=DEPLOY_DIR)
            print(f"  ✓ Successfully deployed and pushed to origin/main at {now_str}!")
    else:
        print("\n💡 Tip: To automatically commit and push to GitHub, run:")
        print("    python scripts/deploy_to_github.py --push")

if __name__ == "__main__":
    main()
