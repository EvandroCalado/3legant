import { Meta } from '@storybook/react';
import Reviews from '.';

export default {
  title: 'Components/Reviews',
  component: Reviews,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Reviews />;
