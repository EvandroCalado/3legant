import Image from 'next/image';
import Link from 'next/link';
import StarFill from '../../icons/star-fill';
import StarLine from '../../icons/star-line';
import Wishlist from '../../icons/wishlist';

export type ProductCardProps = {
  isNew: boolean;
  slug: string;
  discount: number;
  image: string;
  rating: number;
  title: string;
  price: number;
};

const ratingStars = [1, 2, 3, 4, 5];

export default function ProductCard({
  isNew,
  slug,
  discount,
  image,
  rating,
  title,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="mx-auto block w-full p-4">
      <div className="flex w-full items-center justify-between">
        <h4 className="font-semibold uppercase">Novos</h4>

        <button className="cursor-pointer" onClick={() => console.log('click')}>
          <Wishlist />
        </button>
      </div>

      <span className="rounded-[4px] bg-green px-2 py-0.5 text-sm font-semibold text-white">
        -{discount}%
      </span>

      <div className="relative mb-6 h-80 w-full overflow-hidden pb-12 [&>button]:hover:opacity-100">
        <Image src={image} alt={title} fill className="object-cover" />

        <button className="button absolute bottom-0 z-10 opacity-0">
          Adcionar ao carrinho
        </button>
      </div>

      <div className="flex items-center">
        {ratingStars.map((star) => {
          if (star <= rating) {
            return (
              <span className="[&>svg]:w-6">
                <StarFill />
              </span>
            );
          } else {
            return (
              <span className="[&>svg]:w-6">
                <StarLine />
              </span>
            );
          }
        })}
      </div>

      <h2 className="my-4 font-semibold">{title}</h2>

      <div className="flex items-center gap-4 font-semibold">
        <span>R${price.toFixed(2)}</span>
        <span className="text-neutral-400">R$299.99</span>
      </div>
    </Link>
  );
}
