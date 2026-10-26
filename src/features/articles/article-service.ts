import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/content/load-articles';
import { Article, ArticleCategory } from './article-types';

export {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
};

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(limit = 4): Article[] {
  const articles = getAllArticles();
  return articles.slice(0, limit);
}
