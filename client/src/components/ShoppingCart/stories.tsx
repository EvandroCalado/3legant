import { Meta } from '@storybook/react';
import ShoppingCart from '.';

export default {
  title: 'Components/ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ShoppingCart />;
