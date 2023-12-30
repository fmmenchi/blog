import type { Meta, StoryObj } from '@storybook/react';
import { SocialIcon } from './social-icon.component';

const meta: Meta<typeof SocialIcon> = {
  component: SocialIcon,
  title: 'SocialIcon',
};
export default meta;
type Story = StoryObj<typeof SocialIcon>;

export const Base: Story = {
  args: { href: 'prova', size: 'm', type: 'github' },
};
