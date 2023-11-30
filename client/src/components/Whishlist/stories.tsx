import { Meta, StoryFn } from '@storybook/react';
import Whishlist, { WhishlistProps } from '.';

export default {
  title: 'Components/Whishlist',
  component: Whishlist,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<WhishlistProps> = () => <Whishlist />;
