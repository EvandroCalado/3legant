import Articles from '../../components/Articles';
import Destak from '../../components/Destak';
import FlashSale from '../../components/FlashSale';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Info from '../../components/Info';
import NewArrivals from '../../components/NewArrivals';
import NewsLetter from '../../components/NewsLetter';
import Services from '../../components/Services';
import ShowRoom from '../../components/ShowRoom';
import Slider from '../../components/Slider';

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

export default function Home() {
  return (
    <>
      <Info />
      <Header />
      <Slider />
      <Destak />
      <ShowRoom />
      <NewArrivals products={products} />
      <Services />
      <FlashSale />
      <Articles articles={articles} />
      <NewsLetter />
      <Footer />
    </>
  );
}
