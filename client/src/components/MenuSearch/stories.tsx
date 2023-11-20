import { Meta } from '@storybook/react';
import MenuSearch from '.';

export default {
  title: 'Components/SearchMenu',
  component: MenuSearch,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MenuSearch />;
