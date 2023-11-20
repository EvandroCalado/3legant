import { Meta } from '@storybook/react';
import MenuMobile from '.';

export default {
  title: 'Components/MenuMobile',
  component: MenuMobile,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MenuMobile />;
