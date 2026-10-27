import fs from 'fs';
import path from 'path';

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

const syncFolders = [
  'blog',
  'danh-cho-doi-tac',
  'kham-pha-trong-kinh',
  'trong-kinh',
  'lien-he',
  've-chung-toi',
  '_next'
];

syncFolders.forEach(dir => {
  const src = path.join('out', dir);
  const dest = path.resolve(dir);
  if (fs.existsSync(src)) {
    copyDir(src, dest);
    console.log(`✓ Synced out/${dir} -> ${dir}`);
  }
});

console.log('Successfully synced static pages to root for GitHub Pages hosting!');
