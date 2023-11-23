import Image from 'next/image';
import Link from 'next/link';

export type ArticleCardProps = {
  image: string;
  title: string;
  slug: string;
};

export default function ArticleCard({ image, title, slug }: ArticleCardProps) {
  return (
    <div className="flex w-full flex-col">
      <Image src={image} alt={title} width={500} height={450} />

      <h2 className="mb-2 mt-4 text-xl font-semibold">{title}</h2>

      <Link
        href={`/blog/${slug}`}
        className="flex w-[83px] items-center border-b border-primary text-sm text-primary [&>img]:ml-1 [&>img]:hover:ml-2"
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
  );
}
