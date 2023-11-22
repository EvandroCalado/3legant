import { Meta } from '@storybook/react';
import Services from '.';

export default {
  title: 'Components/Services',
  component: Services,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Services />;
