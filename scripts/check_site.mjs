import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const errors = [];

function checkAsset(url, context) {
  if (!url || url.startsWith('http') || url.startsWith('data:')) return;
  const clean = url.replace(/^\//, '');
  const full = path.join('public', clean);
  if (!fs.existsSync(full)) {
    errors.push(`Missing asset [${context}]: public/${clean}`);
  }
}

// 1. Validate home_content.json
const home = JSON.parse(fs.readFileSync('content/home_content.json', 'utf8'));
for (const key of ['hero', 'philosophy', 'products', 'technologies', 'whyRocky', 'blog', 'partner']) {
  if (!home[key]) errors.push(`home_content.json missing section: ${key}`);
}
checkAsset(home.hero?.heroImage, 'home_content.hero.heroImage');
for (const item of home.products?.items || []) checkAsset(item.image, `home_content.products:${item.link}`);
for (const card of home.technologies?.cards || []) checkAsset(card.image, `home_content.technologies:${card.title}`);
for (const art of home.blog?.articles || []) checkAsset(art.image, `home_content.blog:${art.slug}`);

// 2. Validate content/products/*.json
const productSlugs = new Set();
const productFiles = fs.readdirSync('content/products').filter((f) => f.endsWith('.json'));
for (const file of productFiles) {
  const full = path.join('content/products', file);
  const p = JSON.parse(fs.readFileSync(full, 'utf8'));
  if (!p.slug || !p.name) errors.push(`Invalid product JSON: ${file}`);
  if (productSlugs.has(p.slug)) errors.push(`Duplicate product slug: ${p.slug}`);
  productSlugs.add(p.slug);
  checkAsset(p.featuredImage || p.images?.[0], `product:${p.slug}`);
}

// 3. Verify all catalog slugs in ProductCatalogView.tsx exist in content/products/
const catalogSrc = fs.readFileSync('src/features/products/ProductCatalogView.tsx', 'utf8');
for (const m of catalogSrc.matchAll(/slug:\s*'([^']+)'/g)) {
  if (!productSlugs.has(m[1])) {
    errors.push(`Catalog references missing product slug: ${m[1]}`);
  }
}

// 4. Validate content/articles/**/*.md
function walkMd(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walkMd(full));
    else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}

const articleFiles = walkMd('content/articles');
for (const file of articleFiles) {
  const { data } = matter(fs.readFileSync(file, 'utf8'));
  if (!data.title || !data.slug) errors.push(`Article missing title/slug: ${file}`);
  if (data.coverImage) checkAsset(data.coverImage, `article:${data.slug}`);
}

if (errors.length > 0) {
  console.error(`\n[CHECK FAILED] ${errors.length} issue(s):`);
  for (const err of errors) console.error(`  - ${err}`);
  process.exit(1);
}

console.log(`[CHECK OK] Verified home_content.json, ${productFiles.length} products, ${articleFiles.length} articles, and all linked assets.`);
