import { Meta } from '@storybook/react';
import NewsLetter from '.';

export default {
  title: 'Components/NewsLetter',
  component: NewsLetter,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <NewsLetter />;
