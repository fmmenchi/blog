import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Tag } from './tag.component';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  decorators: [withRouter],
  args: { text: 'prova' },
};
