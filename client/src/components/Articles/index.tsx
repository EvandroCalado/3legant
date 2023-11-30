import ArticleCard, { ArticleCardProps } from '../ArticleCard';

export type ArticlesProps = {
  title?: string;
  viewMode?: 'grid' | 'rows';
  articles: ArticleCardProps[];
};

export default function Articles({
  articles,
  title,
  viewMode = 'grid',
}: ArticlesProps) {
  return (
    <article className="container mx-auto my-20">
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>

      <div
        className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'
            : 'grid grid-cols-1 gap-8 md:grid-cols-2'
        }`}
      >
        {articles.map((article) => (
          <ArticleCard
            key={article.title}
            image={article.image}
            title={article.title}
            slug={article.slug}
            viewMode={viewMode}
          />
        ))}
      </div>
    </article>
  );
}
