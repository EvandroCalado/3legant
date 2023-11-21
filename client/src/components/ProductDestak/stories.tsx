import { Meta, StoryFn } from '@storybook/react';
import ProductDestak, { ProductDestakProps } from '.';

export default {
  title: 'Components/ProductDestak',
  component: ProductDestak,
  args: {
    title: 'Sala de Estar',
    image: '/paste-image03.png',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ProductDestakProps> = (args) => (
  <ProductDestak {...args} />
);

export const IsLandscape: StoryFn<ProductDestakProps> = (args) => (
  <ProductDestak isLandscape {...args} />
);
