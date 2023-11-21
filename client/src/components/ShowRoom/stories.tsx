import { Meta } from '@storybook/react';
import ShowRoom from '.';

export default {
  title: 'Components/ShowRoom',
  component: ShowRoom,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <ShowRoom />;
