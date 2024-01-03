import type { Meta, StoryObj } from '@storybook/react';
import { StackedLayout } from './stacked-layout.component';

const meta: Meta<typeof StackedLayout> = {
  component: StackedLayout,
  title: 'Design System/App Shells/Stacked Layout',
};
export default meta;
type Story = StoryObj<typeof StackedLayout>;

export const Base: Story = {
  args: {
    header: <header className="bg-blue-500 text-white font-bold py-2 px-4">header</header>,
    children: 'content',
    footer: <footer className="bg-blue-500 text-white font-bold py-2 px-4">footer</footer>,
  },
};
