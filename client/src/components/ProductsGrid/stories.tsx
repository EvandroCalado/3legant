import { Meta, StoryFn } from '@storybook/react';
import ProductsGrid, { ProductsGridProps } from '.';

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

export default {
  title: 'Components/ProductsGrid',
  component: ProductsGrid,
  args: {
    products,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductsGridProps> = (args) => (
  <ProductsGrid {...args} />
);
