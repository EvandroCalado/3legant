import { Meta, StoryFn } from '@storybook/react';
import Articles, { ArticlesProps } from '.';

const articles = [
  {
    image: '/blog01.png',
    title: '7 formas de decoarar sua casa',
    slug: '7-formas-de-decoarar-sua-casa',
  },
  {
    image: '/blog02.png',
    title: 'Organização de cozinha',
    slug: 'organizacao-de-cozinha',
  },
  {
    image: '/blog03.png',
    title: 'Decore seu quarto',
    slug: 'decore-seu-quarto',
  },
];

export default {
  title: 'Components/Articles',
  component: Articles,
  args: {
    articles,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<ArticlesProps> = (args) => <Articles {...args} />;
