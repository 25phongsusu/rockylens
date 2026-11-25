#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
ROCKY LENS — Automated Build & Deploy Engine (Local -> Rocky-Deploy -> GitHub)
Usage:
    python scripts/deploy_to_github.py           # Check, build out/ and sync to Rocky-Deploy
    python scripts/deploy_to_github.py --quick   # Sync existing out/ without rebuilding
    python scripts/deploy_to_github.py --push    # Check, build, sync, commit, and git push!
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
    "san-pham",
    "su-kien",
    "trong-kinh",
    "lien-he",
    "ve-chung-toi",
    "_next",
    "assets",
    "images",
    "documents",
    "uploads",
]

DEPLOY_FILES = [
    "index.html",
    "404.html",
    "robots.txt",
    "sitemap.xml",
    ".htaccess",
    "_redirects",
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
    p1 = re.compile(r'(?<=["\'(=])/(images|documents|icons|uploads|assets)/')
    content = p1.sub(f'{BASE_PATH}/\\1/', content)
    p2 = re.compile(r'\\"/(images|documents|icons|uploads|assets)/')
    content = p2.sub(f'\\"{BASE_PATH}/\\1/', content)
    return content


def patch_html_txt(target_dir):
    if not os.path.exists(target_dir):
        return
    for root, _, files in os.walk(target_dir):
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
    is_quick = "--quick" in sys.argv or "--fast" in sys.argv

    print("=======================================================")
    print("🚀 ROCKY LENS — BUILD & DEPLOY ENGINE")
    print(f"Source Directory: {ROOT_DIR}")
    print(f"Deploy Directory: {DEPLOY_DIR}")
    print("=======================================================\n")

    if not os.path.exists(DEPLOY_DIR):
        print(f"[ERROR] Deploy directory does not exist: {DEPLOY_DIR}")
        sys.exit(1)

    print("[1/4] Running data & asset integrity checks...")
    run_cmd("node scripts/check_site.mjs")

    if is_quick and os.path.exists(OUT_DIR):
        print("\n[2/4] [QUICK MODE] Using existing out/ artifacts...")
    else:
        print("\n[2/4] Running Next.js static build (output -> out/)...")
        build_cmd = "npx.cmd next build" if sys.platform == "win32" else "npx next build"
        run_cmd(build_cmd)

    print("\n[3/4] Copying compiled artifacts from out/ to Rocky-Deploy...")
    for folder in DEPLOY_FOLDERS:
        dest_folder = os.path.join(DEPLOY_DIR, folder)
        if os.path.exists(dest_folder):
            shutil.rmtree(dest_folder)
        src_folder = os.path.join(OUT_DIR, folder)
        if os.path.exists(src_folder):
            shutil.copytree(src_folder, dest_folder)
            print(f"  ✓ Synced folder: {folder}")

    for file_name in DEPLOY_FILES:
        src_file = os.path.join(OUT_DIR, file_name)
        dest_file = os.path.join(DEPLOY_DIR, file_name)
        if os.path.exists(src_file):
            shutil.copy2(src_file, dest_file)
            print(f"  ✓ Synced file: {file_name}")

    with open(os.path.join(DEPLOY_DIR, ".nojekyll"), "w", encoding="utf-8") as f:
        f.write("")
    print("  ✓ Created .nojekyll")

    print("  ✓ Patching any unprefixed asset paths in HTML/TXT payloads...")
    asset_only = {"_next", "assets", "images", "documents", "uploads"}
    for folder in DEPLOY_FOLDERS:
        if folder not in asset_only:
            patch_html_txt(os.path.join(DEPLOY_DIR, folder))
    for root_html in ("index.html", "404.html"):
        p = os.path.join(DEPLOY_DIR, root_html)
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8", errors="ignore") as f:
                c = f.read()
            fixed = fix_asset_paths(c)
            if fixed != c:
                with open(p, "w", encoding="utf-8") as f:
                    f.write(fixed)

    print("\n[SUCCESS] Rocky-Deploy is fully updated and ready for GitHub Pages!")

    if should_push:
        print("\n[4/4] Pushing changes to GitHub Pages (origin/main)...")
        now_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        run_cmd("git add -A", cwd=DEPLOY_DIR)
        res = subprocess.run("git diff-index --quiet HEAD", shell=True, cwd=DEPLOY_DIR)
        if res.returncode == 0:
            print("  ℹ No new changes to commit in Rocky-Deploy.")
        else:
            run_cmd(f'git commit -m "deploy: update static site at {now_str}"', cwd=DEPLOY_DIR)
            run_cmd("git push origin main", cwd=DEPLOY_DIR)
            print(f"  ✓ Successfully deployed and pushed to origin/main at {now_str}!")
    else:
        print("\n💡 Tip: To commit and push to GitHub, run:")
        print("    python scripts/deploy_to_github.py --push")


if __name__ == "__main__":
    main()
