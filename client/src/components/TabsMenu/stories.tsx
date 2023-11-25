import { Meta, StoryFn } from '@storybook/react';
import TabsMenu, { TabsMenuProps } from '.';

export default {
  title: 'Components/TabsMenu',
  component: TabsMenu,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<TabsMenuProps> = () => <TabsMenu />;
