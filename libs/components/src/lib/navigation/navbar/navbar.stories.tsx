import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar.component';

import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { Outlet } from '@remix-run/react';
import { RemixNavLink } from '../navlink';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Design System/Navigation/Navbar',
  decorators: [withRouter],
};
export default meta;
type Story = StoryObj<typeof Navbar>;

const navLinks = [
  { href: '/link1', name: 'link 1' },
  { href: '/link2', name: 'link 2' },
  { href: '/link3', name: 'link 3' },
];

export const Base: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: navLinks[0].href,
      },
      routing: reactRouterOutlets([
        {
          path: navLinks[0].href,
          element: <div>{navLinks[0].name}</div>,
        },
        {
          path: navLinks[1].href,
          element: <div>{navLinks[1].name}</div>,
        },
        {
          path: navLinks[2].href,
          element: <div>{navLinks[2].name}</div>,
        },
      ]),
    }),
  },
  args: {
    navLinks,
    navLinkRenderFn: RemixNavLink,
  },
  render: (props) => (
    <>
      <Navbar {...props} />
      <div className="mx-auto p-6 bg-white rounded-lg shadow-xl text-xl">
        <Outlet />
      </div>
    </>
  ),
};
