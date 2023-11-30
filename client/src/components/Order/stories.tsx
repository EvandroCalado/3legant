import { Meta, StoryFn } from '@storybook/react';
import Order, { OrderProps } from '.';

export default {
  title: 'Components/Order',
  component: Order,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<OrderProps> = () => <Order />;
