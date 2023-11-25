import { ArrowRight, Star } from 'lucide-react';
import ReviewItem from '../ReviewItem';

const ratingStars = [1, 2, 3, 4, 5];

export default function Reviews() {
  return (
    <div className=" space-y-4">
      <h2 className="text-xl font-semibold sm:text-2xl">
        Avaliações dos Clientes
      </h2>

      <div className="flex items-center gap-[4px]">
        <div className="flex items-center gap-1">
          {ratingStars.map((star) => (
            <Star size={16} />
          ))}
        </div>

        <span className="text-sm">11</span>

        <span className="text-sm">Avaliações</span>
      </div>

      <form className="text relative h-20 w-full">
        <textarea
          name="text"
          className="h-full w-full rounded-2xl border border-neutral-300 p-4 pr-40 outline-none duration-150 focus:border-primary"
        />

        <button className="button absolute right-4 top-[50%] flex w-8 -translate-y-1/2 items-center justify-center rounded-full py-1 font-semibold sm:w-28">
          <span className="hidden sm:inline">Avaliar</span>
          <ArrowRight className="w-4 sm:hidden" />
        </button>
      </form>

      <div className="flex flex-col items-start justify-between space-y-4 py-8 sm:flex-row sm:items-center  sm:space-y-0">
        <div className="space-x-2 text-2xl font-semibold">
          <span>Avaliações</span>
          <span>11</span>
        </div>

        <select
          id="countries"
          className="focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm font-semibold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:w-44"
        >
          <option selected={true} value="new">
            Mais Recentes
          </option>
          <option value="old">Mais Antigos</option>
          <option value="best">Melhor Avaliados</option>
        </select>
      </div>

      <div className="space-y-8">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>

      <div className="flex items-center justify-center">
        <button className="rounded-full border border-primary px-6 py-1 text-sm font-semibold duration-150 hover:bg-neutral-200">
          Ver mais
        </button>
      </div>
    </div>
  );
}
