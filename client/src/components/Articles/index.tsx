import ArticleCard, { ArticleCardProps } from '../ArticleCard';

export type ArticlesProps = {
  articles: ArticleCardProps[];
};

export default function Articles({ articles }: ArticlesProps) {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="mb-8 text-2xl font-semibold">Artigos</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            slug={article.slug}
          />
        ))}
      </div>
    </div>
  );
}
