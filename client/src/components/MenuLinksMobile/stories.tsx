import { Meta } from '@storybook/react';
import MenuLinksMobile from '.';

export default {
  title: 'Components/MenuLinksMobile',
  component: MenuLinksMobile,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MenuLinksMobile />;
