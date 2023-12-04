import { CategoriesFetcher } from '../../api/categories';
import { ProductsFetcher } from '../../api/products';
import { SliderFetcher } from '../../api/slider';
import Articles from '../../components/Articles';
import Destak from '../../components/Destak';
import FlashSale from '../../components/FlashSale';
import NewArrivals from '../../components/NewArrivals';
import NewsLetter from '../../components/NewsLetter';
import Services from '../../components/Services';
import ShowRoom from '../../components/ShowRoom';
import Slider from '../../components/Slider';
import Layout from '../../layout';

const articles = [
  {
    image: '/blog01.png',
    title: '7 formas de decoarar sua casa',
    slug: '7-formas-de-decoarar-sua-casa',
  },
  {
    image: '/blog02.png',
    title: 'Organização de cozinha',
    slug: 'organização-de-cozinha',
  },
  {
    image: '/blog03.png',
    title: 'Decore seu quarto',
    slug: 'decore-seu-quarto',
  },
];

const slidesFetcher = new SliderFetcher();
const productsFetcher = new ProductsFetcher();
const categoriesFetcher = new CategoriesFetcher();

export default async function Home() {
  const slides = await slidesFetcher.getAll();
  const products = await productsFetcher.getAll();
  const categories = await categoriesFetcher.getAll();

  if (!slides) return null;
  if (!products) return null;
  if (!categories) return null;

  return (
    <Layout>
      <Slider slides={slides} />
      <Destak />
      <ShowRoom categories={categories} />
      <NewArrivals products={products} />
      <Services />
      <FlashSale />
      <Articles articles={articles} title="Artigos" />
      <NewsLetter />
    </Layout>
  );
}
