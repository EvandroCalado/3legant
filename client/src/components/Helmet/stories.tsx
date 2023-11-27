import { Meta } from '@storybook/react';
import Helmet from '.';

export default {
  title: 'Components/Helmet',
  component: Helmet,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Helmet />;
