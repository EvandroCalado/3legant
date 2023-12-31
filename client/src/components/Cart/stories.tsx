import { Meta } from '@storybook/react';
import Cart from '.';

export default {
  title: 'Components/Cart',
  component: Cart,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Cart />;
