import { Star } from 'lucide-react';

const ratingStars = [1, 2, 3, 4, 5];

export default function ReviewItem() {
  return (
    <div className="flex sm:space-x-8">
      <div className="absolute h-14 w-14 overflow-hidden rounded-full bg-gray-200 sm:relative">
        <svg
          className="absolute h-14 w-14 text-gray-400 sm:-left-[3px] lg:-left-[1px]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>

      <div className="w-full space-y-4">
        <h4 className="text-center font-semibold sm:text-left">
          Evandro Calado
        </h4>

        <span className="flex items-center justify-center sm:items-end sm:justify-start">
          {ratingStars.map((star) => (
            <Star size={14} fill="true" />
          ))}
        </span>

        <p className="w-full text-[12px] text-neutral-400">
          Comprei há 3 semanas e agora volto só para dizer “Produto incrível”.
          Eu realmente gosto disso. At vero eos et acusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupt et quas molestias excepturi sint non provident.
        </p>

        <div className="flex items-center justify-center gap-2 text-[10px] sm:justify-start">
          <button className="rounded-md px-2 py-1 duration-150 hover:bg-neutral-300">
            Like
          </button>
          <button className="rounded-md px-2 py-1 duration-150 hover:bg-neutral-300">
            Responder
          </button>
        </div>
      </div>
    </div>
  );
}
