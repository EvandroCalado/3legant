import Image from 'next/image';
import Link from 'next/link';

export type ArticleCardProps = {
  image: string;
  title: string;
  slug: string;
  viewMode?: 'grid' | 'rows';
};

export default function ArticleCard({
  image,
  title,
  slug,
  viewMode,
}: ArticleCardProps) {
  return (
    <div
      className={`${
        viewMode === 'rows' ? 'flex-row gap-4' : 'flex-col'
      } flex w-full`}
    >
      <Image
        src={image}
        alt={title}
        width={viewMode === 'rows' ? 300 : 500}
        height={viewMode === 'rows' ? 300 : 450}
        className={`${viewMode === 'rows' ? 'flex-1' : ''}`}
      />

      <div className={`${viewMode === 'rows' ? 'flex-1' : ''}`}>
        <h2 className="mb-2 mt-4 text-xl font-semibold">{title}</h2>
        <Link
          href={`/blog/${slug}`}
          className={`flex w-[83px] items-center border-b border-primary text-sm text-primary [&>img]:ml-1 [&>img]:hover:ml-2`}
        >
          Ler mais{' '}
          <Image
            src={'/icons/arrow-black.svg'}
            alt="Arrow"
            width={24}
            height={24}
            className="h-4 w-4 text-primary duration-150"
          />
        </Link>
      </div>
    </div>
  );
}
