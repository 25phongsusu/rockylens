import fs from 'fs';
import path from 'path';

function findFiles(dir, exts) {
  let res = [];
  if (!fs.existsSync(dir)) return res;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['.next', 'node_modules', 'out', '.git'].includes(entry.name)) {
        res = res.concat(findFiles(full, exts));
      }
    } else if (!exts || exts.some(e => entry.name.endsWith(e))) {
      res.push(full);
    }
  }
  return res;
}

const codeFiles = [
  'index.html',
  ...findFiles('src', ['.ts', '.tsx', '.json', '.css']),
  ...findFiles('content', ['.md', '.json']),
  ...findFiles('scripts', ['.js', '.mjs'])
];

let allCodeText = '';
for (const file of codeFiles) {
  allCodeText += fs.readFileSync(file, 'utf8') + '\n';
}

const criticalKeep = [
  'h-lens3.png',
  'logo_rocky_transparent.png',
  'logo_rocky_white_text.png',
  'SF-Pro-Display-Regular',
  'SF-Pro-Display-Medium',
  'SF-Pro-Display-Semibold',
  'SF-Pro-Display-Bold',
  'SF-Pro-Display-Heavy',
  'Rocky_Lens_Catalogue_2025.pdf',
  'images/real',
  'assets/images/real',
  'public/images/real'
];

let deletedCount = 0;
let freedBytes = 0;

function pruneDirectory(targetDir, isPublic = true) {
  if (!fs.existsSync(targetDir)) return;
  const files = findFiles(targetDir);

  for (const file of files) {
    const basename = path.basename(file);
    const rel = isPublic
      ? path.relative('public', file).replace(/\\/g, '/')
      : path.relative('.', file).replace(/\\/g, '/');

    const normFile = file.replace(/\\/g, '/');
    const isCritical = criticalKeep.some(k => normFile.includes(k));
    const isMentioned = allCodeText.includes(basename) ||
                        allCodeText.includes(rel) ||
                        allCodeText.includes('/' + rel);

    if (!isCritical && !isMentioned) {
      const size = fs.statSync(file).size;
      fs.unlinkSync(file);
      deletedCount++;
      freedBytes += size;
    }
  }
}

// 1. Prune public/
['public/assets', 'public/images', 'public/uploads'].forEach(dir => pruneDirectory(dir, true));

// 2. Prune root folders
['assets', 'images', 'uploads'].forEach(dir => pruneDirectory(dir, false));

// 3. Remove icons folders completely
['icons', 'public/icons'].forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`✓ Removed unused empty directory: ${dir}`);
  }
});

// 4. Remove empty subdirectories
function removeEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeEmptyDirs(full);
      if (fs.readdirSync(full).length === 0) {
        fs.rmdirSync(full);
        console.log(`✓ Removed empty folder: ${full}`);
      }
    }
  }
}

['public/assets', 'public/images', 'public/uploads', 'assets', 'images', 'uploads'].forEach(removeEmptyDirs);

console.log(`\n🎉 Successfully pruned ${deletedCount} unused assets.`);
console.log(`💾 Total disk space freed: ${(freedBytes / (1024 * 1024)).toFixed(2)} MB`);
