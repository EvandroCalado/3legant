import { Meta, StoryFn } from '@storybook/react';
import ArticleCard, { ArticleCardProps } from '.';

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  args: {
    image: '/blog01.png',
    title: '7 formas de decorar dua casa',
  },
} as Meta;

export const Default: StoryFn<ArticleCardProps> = (args) => (
  <ArticleCard {...args} />
);
