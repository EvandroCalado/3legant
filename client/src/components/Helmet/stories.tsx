import { Meta, StoryFn } from '@storybook/react';
import Helmet, { HelmetProps } from '.';

export default {
  title: 'Components/Helmet',
  component: Helmet,
  args: {
    path: 'Home Loja',
    image: '/shop.png',
    title: 'Loja',
    description: 'Vamos projetar o lugar que você sempre imaginou.',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<HelmetProps> = (args) => <Helmet {...args} />;
