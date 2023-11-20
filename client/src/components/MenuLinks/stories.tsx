import { Meta } from '@storybook/react';
import MenuLinks from '.';

export default {
  title: 'Components/MenuLinks',
  component: MenuLinks,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MenuLinks />;
