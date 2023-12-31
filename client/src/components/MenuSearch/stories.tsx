import { Meta } from '@storybook/react';
import MenuSearch from '.';

export default {
  title: 'Components/MenuSearch',
  component: MenuSearch,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MenuSearch />;
