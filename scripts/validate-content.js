import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PRODUCTS_DIR = path.join(__dirname, '..', 'content', 'products');
const ARTICLES_DIR = path.join(__dirname, '..', 'content', 'articles');

function validate() {
  console.log('🔍 Starting Content Validation...\n');
  let errors = 0;
  let warnings = 0;

  // 1. Validate Products
  console.log('--- Validating Products ---');
  if (!fs.existsSync(PRODUCTS_DIR)) {
    console.error('❌ Products directory does not exist:', PRODUCTS_DIR);
    process.exit(1);
  }

  const productFiles = fs.readdirSync(PRODUCTS_DIR).filter((f) => f.endsWith('.json'));
  const productIds = new Set();
  const productSlugs = new Set();

  for (const file of productFiles) {
    const filePath = path.join(PRODUCTS_DIR, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Check required fields
      const required = ['id', 'slug', 'name', 'status', 'shortDescription', 'specifications'];
      for (const field of required) {
        if (!data[field]) {
          console.error(`❌ [${file}] Missing required field: "${field}"`);
          errors++;
        }
      }

      // Check ID uniqueness
      if (productIds.has(data.id)) {
        console.error(`❌ [${file}] Duplicate product ID: "${data.id}"`);
        errors++;
      }
      productIds.add(data.id);

      // Check Slug uniqueness
      if (productSlugs.has(data.slug)) {
        console.error(`❌ [${file}] Duplicate product Slug: "${data.slug}"`);
        errors++;
      }
      productSlugs.add(data.slug);
    } catch (e) {
      console.error(`❌ [${file}] JSON Parse Error:`, e.message);
      errors++;
    }
  }

  console.log(`✅ Validated ${productFiles.length} products.\n`);

  // 2. Validate Articles
  console.log('--- Validating Articles ---');
  function scanDir(dir) {
    let files = [];
    if (!fs.existsSync(dir)) return files;
    for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) files.push(...scanDir(full));
      else if (item.name.endsWith('.md')) files.push(full);
    }
    return files;
  }

  const articleFiles = scanDir(ARTICLES_DIR);
  const articleSlugs = new Set();

  for (const file of articleFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const slugMatch = content.match(/slug:\s*"([^"]+)"/);
    const titleMatch = content.match(/title:\s*"([^"]+)"/);

    if (!slugMatch) {
      console.error(`❌ [${path.basename(file)}] Missing slug in frontmatter`);
      errors++;
    } else {
      const slug = slugMatch[1];
      if (articleSlugs.has(slug)) {
        console.error(`❌ [${path.basename(file)}] Duplicate article slug: "${slug}"`);
        errors++;
      }
      articleSlugs.add(slug);
    }

    if (!titleMatch) {
      console.warn(`⚠️ [${path.basename(file)}] Missing title in frontmatter`);
      warnings++;
    }
  }

  console.log(`✅ Validated ${articleFiles.length} articles.\n`);

  console.log('====================================');
  if (errors > 0) {
    console.error(`❌ Validation FAILED with ${errors} errors and ${warnings} warnings.`);
    process.exit(1);
  } else {
    console.log(`🎉 Validation PASSED successfully! (0 errors, ${warnings} warnings)`);
  }
}

validate();
