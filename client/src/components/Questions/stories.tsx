import { Meta } from '@storybook/react';
import Questions from '.';

export default {
  title: 'Components/Questions',
  component: Questions,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Questions />;
