import { LayoutGrid, SlidersHorizontal, StretchHorizontal } from 'lucide-react';
import Helmet from '../../components/Helmet';
import ProductsGrid from '../../components/ProductsGrid';
import Layout from '../../layout';

const products = [
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product01.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product02.png',
    rating: 2,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    discount: 50,
    slug: 'luminaria-de-mesa',
    image: '/product03.png',
    rating: 4,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product04.png',
    rating: 5,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product01.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product02.png',
    rating: 1,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    discount: 50,
    slug: 'luminaria-de-mesa',
    image: '/product03.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'luminaria-de-mesa',
    discount: 50,
    image: '/product04.png',
    rating: 5,
    title: 'Luminária de mesa',
    price: 179.99,
  },
];

export default function Shop() {
  return (
    <Layout>
      <div className="container mx-auto">
        <Helmet />

        <div className="my-16 flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal />
            <span className="text-2xl font-semibold">Filtro</span>
          </div>

          <div className="flex items-center gap-4">
            <select
              id="countries"
              className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue"
            >
              <option selected={true}>Relevância</option>
              <option value="US">Menor preço</option>
              <option value="CA">Maior preço</option>
            </select>

            <div className="flex items-center gap-2">
              <div className="cursor-pointer rounded-full p-2 duration-150 hover:bg-gray-200">
                <LayoutGrid fill="" />
              </div>
              <div className="cursor-pointer rounded-full p-2 duration-150 hover:bg-gray-200">
                <StretchHorizontal fill="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start px-4">
          <div className="hidden w-[220px] space-y-4 sm:block md:w-1/5">
            <div className="space-y-4">
              <h4 className="font-semibold uppercase">Categorias</h4>

              <div className="flex h-40 flex-col gap-2 overflow-y-auto">
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Todos
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Sala de Estar
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Cozinha
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Banheiro
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Sala de Jantar
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Varanda
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Varanda
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary hover:underline">
                  Varanda
                </span>
                <span className="cursor-pointer text-sm font-semibold text-neutral-400 duration-150 hover:text-primary">
                  Varanda
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4>Preço</h4>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="default-checkbox"
                  className="text-sm font-semibold text-neutral-400"
                >
                  Todos
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="text-blue-600 mr-4 h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="default-checkbox"
                  className="text-sm font-semibold text-neutral-400"
                >
                  R$ 0,00 - R$ 100,00
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="text-blue-600 mr-4 h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="default-checkbox"
                  className="text-sm font-semibold text-neutral-400"
                >
                  R$ 100,00 - R$ 200,00
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="text-blue-600 mr-4 h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="default-checkbox"
                  className="text-sm font-semibold text-neutral-400"
                >
                  R$ 200,00 - R$ 300,00
                </label>
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="text-blue-600 mr-4 h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-center sm:w-4/5">
            <ProductsGrid products={products} />

            <div className="flex items-center justify-center">
              <button className="my-16 rounded-full border border-primary px-6 py-1 text-sm font-semibold duration-150 hover:bg-neutral-200">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
