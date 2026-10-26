import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Article, ArticleMeta } from '@/features/articles/article-types';

const ARTICLES_DIRECTORY = path.join(process.cwd(), 'content', 'articles');

function getArticleFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getArticleFiles(fullPath));
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      files.push(fullPath);
    }
  }

  return files;
}

export function getAllArticles(): Article[] {
  const filePaths = getArticleFiles(ARTICLES_DIRECTORY);
  const articles: Article[] = [];

  for (const filePath of filePaths) {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const article: Article = {
        id: data.id || path.basename(filePath, path.extname(filePath)),
        slug: data.slug || path.basename(filePath, path.extname(filePath)),
        title: data.title || 'Bài viết chưa có tiêu đề',
        description: data.description || '',
        category: data.category || 'kien-thuc',
        categoryName: data.categoryName || 'Kiến thức quang học',
        coverImage: data.coverImage || '/images/articles/blog_b2b_policy.png',
        publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
        updatedAt: data.updatedAt,
        author: data.author || 'Rocky Lens Canada',
        readTime: data.readTime || '5 phút đọc',
        relatedProductIds: data.relatedProductIds || [],
        relatedArticleIds: data.relatedArticleIds || [],
        tags: data.tags || [],
        content: content.trim(),
      };

      articles.push(article);
    } catch (err) {
      console.error(`Error loading article at ${filePath}:`, err);
    }
  }

  // Sort by publishedAt descending
  articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getAllArticles();
  return articles.find((a) => a.slug === slug) || null;
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const allArticles = getAllArticles();
  const others = allArticles.filter((a) => a.id !== article.id);

  const ranked = others.map((a) => {
    let score = 0;
    if (a.category === article.category) score += 3;

    const sharedTags = a.tags.filter((t) => article.tags.includes(t));
    score += sharedTags.length * 2;

    const sharedProducts = a.relatedProductIds.filter((p) =>
      article.relatedProductIds.includes(p)
    );
    score += sharedProducts.length * 2;

    return { article: a, score };
  });

  ranked.sort((a, b) => b.score - a.score);
  return ranked.slice(0, limit).map((item) => item.article);
}
