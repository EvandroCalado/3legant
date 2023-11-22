import Image from 'next/image';
import Link from 'next/link';

export type ProductDestakProps = {
  isLandscape?: boolean;
  title?: string;
  image?: string;
};

export default function ProductDestak({
  isLandscape = false,
  title,
  image,
}: ProductDestakProps) {
  return (
    <div
      className={`${
        isLandscape ? 'flex-row md:gap-8 lg:gap-16' : 'flex-col'
      } flex space-y-4`}
    >
      <div className={`${isLandscape ? 'my-8' : ''} flex flex-col justify-end`}>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <Link
          href={'/'}
          className="flex w-12 items-center border-b border-primary text-sm text-primary [&>img]:ml-1 [&>img]:hover:ml-2"
        >
          Loja{' '}
          <Image
            src={'/icons/arrow-black.svg'}
            alt="Arrow"
            width={24}
            height={24}
            className="h-4 w-4 text-primary duration-150"
          />
        </Link>
      </div>

      <div>
        <Image
          src={image!}
          alt="Product"
          width={isLandscape ? 400 : 700}
          height={isLandscape ? 400 : 700}
          className="object-cover"
        />
      </div>
    </div>
  );
}
