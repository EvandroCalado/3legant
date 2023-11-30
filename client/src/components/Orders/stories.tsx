import { Meta, StoryFn } from '@storybook/react';
import Orders, { OrdersProps } from '.';

export default {
  title: 'Components/Orders',
  component: Orders,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<OrdersProps> = () => <Orders />;
