import { Meta, StoryFn } from '@storybook/react';
import NewArrivals, { ProductsCardProps } from '.';

const products = [
  {
    isNew: true,
    slug: 'product-01',
    discount: 50,
    image: '/product01.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'product-02',
    discount: 50,
    image: '/product02.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'product-03',
    discount: 50,
    image: '/product03.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
  {
    isNew: true,
    slug: 'product-04',
    discount: 50,
    image: '/product04.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
];

export default {
  title: 'Components/NewArrivals',
  args: {
    products,
  },
  component: NewArrivals,
} as Meta;

export const Default: StoryFn<ProductsCardProps> = (args) => (
  <NewArrivals {...args} />
);
