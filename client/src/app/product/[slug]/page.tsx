import { ChevronRight } from 'lucide-react';
import ProductDetails from '../../../components/ProductDetails';
import ProductSlider from '../../../components/ProductSlider';
import TabsMenu from '../../../components/TabsMenu';
import Layout from '../../../layout';

const images = [
  '/paste-image01.png',
  '/paste-image02.png',
  '/paste-image03.png',
  '/paste-image03.png',
];

export default function ProductSlug() {
  return (
    <Layout>
      <section className="container mx-auto my-8 flex flex-col items-center gap-8 px-4">
        <div className="flex w-full items-center gap-2">
          <span className="flex items-center text-neutral-400">
            Home <ChevronRight size={18} />
          </span>
          <span className="flex items-center text-neutral-400">
            Loja <ChevronRight size={18} />
          </span>
          <span className="font-semibold">Produto </span>
        </div>

        <div className="flex flex-col items-center gap-16 sm:flex-row">
          <div className="flex-1">
            <ProductSlider images={images} />
          </div>
          <div className="flex-1">
            <ProductDetails />
          </div>
        </div>

        <TabsMenu />
      </section>
    </Layout>
  );
}
