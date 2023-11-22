import { Meta, StoryFn } from '@storybook/react';
import ProductCard, { ProductCardProps } from '.';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  args: {
    isNew: true,
    discount: 50,
    image: '/product01.png',
    rating: 3,
    title: 'Luminária de mesa',
    price: 179.99,
  },
} as Meta;

export const Default: StoryFn<ProductCardProps> = (args) => (
  <ProductCard {...args} />
);
