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
