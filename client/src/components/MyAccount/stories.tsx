import { Meta } from '@storybook/react';
import MyAccount from '.';

export default {
  title: 'Components/MyAccount',
  component: MyAccount,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <MyAccount />;
