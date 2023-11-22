import Image from 'next/image';

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
    <div className="block w-72">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold uppercase">Novos</h4>

        <button className="cursor-pointer" onClick={() => console.log('click')}>
          <Image
            src={'/icons/Line.svg'}
            alt="wishlist"
            width={24}
            height={24}
          />
        </button>
      </div>

      <span className="rounded-[4px] bg-green px-2 py-0.5 text-sm font-semibold text-white">
        -{discount}%
      </span>

      <div className="relative mb-6 h-80 w-72 overflow-hidden pb-12 [&>button]:hover:opacity-100">
        <Image src={image} alt={title} fill className="object-cover" />

        <button className="button absolute bottom-0 z-10 opacity-0">
          Adcionar ao carrinho
        </button>
      </div>

      <div className="flex items-center">
        {ratingStars.map((star) => {
          if (star <= rating) {
            return (
              <Image
                key={star}
                src={'/icons/star-fill.svg'}
                alt="Star"
                width={24}
                height={24}
              />
            );
          } else {
            return (
              <Image
                key={star}
                src={'/icons/star-line.svg'}
                alt="Star"
                width={24}
                height={24}
              />
            );
          }
        })}
      </div>

      <h2 className="my-4 font-semibold">{title}</h2>

      <div className="flex items-center gap-4 font-semibold">
        <span>R${price.toFixed(2)}</span>
        <span className="text-neutral-400">R$299.99</span>
      </div>
    </div>
  );
}
