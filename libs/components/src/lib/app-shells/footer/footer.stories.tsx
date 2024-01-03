import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer.component';
import { SocialIcon } from '../../social-icons';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Design System/App Shells/Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Base: Story = {
  args: {
    //logo: 'Logo',
    copyright: '@copyright: Fabio',
    socialIcons: [
      <SocialIcon href="/github" type="github" size="l" />,
      <SocialIcon href="/facebook" type="facebook" size="l" />,
      <SocialIcon href="/twitter" type="twitter" size="l" />,
    ],
  },
};
