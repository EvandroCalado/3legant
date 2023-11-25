import { Meta } from '@storybook/react';
import AdditionalInfo from '.';

export default {
  title: 'Components/AdditionalInfo',
  component: AdditionalInfo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <AdditionalInfo />;
