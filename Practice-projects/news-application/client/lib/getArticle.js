import articles from '../articles';

export default async function getArticle(slug) {
  const article = articles.find((article) => article.slug === slug);
  console.log(article);

  if (!article.id) return undefined;

  return article;
}
