import { Meta } from '@storybook/react';
import Destak from '.';

export default {
  title: 'Components/Destak',
  component: Destak,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Destak />;
