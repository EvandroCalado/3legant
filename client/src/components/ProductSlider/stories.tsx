import { Meta, StoryFn } from '@storybook/react';
import ProductSlider, { ProductsCardProps } from '.';

export default {
  title: 'Components/ProductSlider',
  component: ProductSlider,
  args: {
    images: [
      '/paste-image01.png',
      '/paste-image02.png',
      '/paste-image03.png',
      '/paste-image04.png',
    ],
  },
} as Meta;

export const Default: StoryFn<ProductsCardProps> = (args) => (
  <ProductSlider {...args} />
);
