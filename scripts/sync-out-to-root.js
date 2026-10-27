import fs from 'fs';
import path from 'path';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/rockylens';

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function fixAssetPaths(content) {
  if (!BASE_PATH) return content;
  return content
    // Match un-prefixed static asset paths inside quotes, brackets or equals:
    // e.g. href="/images/...", src="/images/...", url('/images/...')
    .replace(/(?<=["'\(=])\/(images|documents|icons|uploads|assets)\//g, `${BASE_PATH}/$1/`)
    // Match escaped JSON strings in Next.js payloads:
    // e.g. \"/images/..."
    .replace(/\\"\/(images|documents|icons|uploads|assets)\//g, `\\"${BASE_PATH}/$1/`);
}

function processDirectoryFiles(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectoryFiles(fullPath);
    } else if (/\.(html|txt)$/i.test(entry.name)) {
      const original = fs.readFileSync(fullPath, 'utf8');
      const fixed = fixAssetPaths(original);
      if (fixed !== original) {
        fs.writeFileSync(fullPath, fixed, 'utf8');
      }
    }
  }
}

// 1. Copy generated folders from out/ to root
const syncFolders = [
  'blog',
  'danh-cho-doi-tac',
  'kham-pha-trong-kinh',
  'trong-kinh',
  'lien-he',
  've-chung-toi',
  '_next',
  'images',
  'documents',
  'icons',
  'uploads'
];

syncFolders.forEach(dir => {
  const src = path.join('out', dir);
  const dest = path.resolve(dir);
  if (fs.existsSync(src)) {
    copyDir(src, dest);
    console.log(`✓ Synced out/${dir} -> ${dir}`);
  }
});

// 2. Copy 404.html, robots.txt, sitemap.xml if exist
['404.html', 'robots.txt', 'sitemap.xml'].forEach(file => {
  const src = path.join('out', file);
  const dest = path.resolve(file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Synced out/${file} -> ${file}`);
  }
});

// 3. Post-process all copied subpage directories to fix asset paths for GitHub Pages
const pagesToProcess = [
  'blog',
  'danh-cho-doi-tac',
  'kham-pha-trong-kinh',
  'trong-kinh',
  'lien-he',
  've-chung-toi'
];

pagesToProcess.forEach(dir => {
  processDirectoryFiles(path.resolve(dir));
});

if (fs.existsSync(path.resolve('404.html'))) {
  const original = fs.readFileSync(path.resolve('404.html'), 'utf8');
  const fixed = fixAssetPaths(original);
  if (fixed !== original) {
    fs.writeFileSync(path.resolve('404.html'), fixed, 'utf8');
  }
}

console.log('Successfully synced and patched static pages for GitHub Pages hosting!');
