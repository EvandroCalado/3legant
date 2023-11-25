import { Meta, StoryFn } from '@storybook/react';
import Layout, { LayoutProps } from '.';

export default {
  title: 'Layout/Layout',
  component: Layout,

  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<LayoutProps> = () => (
  <Layout>
    <div className="flex h-96 w-full items-center justify-center">Content</div>
  </Layout>
);
