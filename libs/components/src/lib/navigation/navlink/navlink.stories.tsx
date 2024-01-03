import type { Meta, StoryObj } from '@storybook/react';
import { RemixNavLink } from './navlink.component';

import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { Outlet } from '@remix-run/react';

import { ReactComponent as IconGitHub } from '@fmmenchi/icons/github.svg';
import { NavLinkProps } from './navlink.model';

const meta: Meta<typeof RemixNavLink> = {
  component: RemixNavLink,
  title: 'Design System/Navigation/NavLink',
};
export default meta;
type Story = StoryObj<typeof RemixNavLink>;

const navLinks: NavLinkProps[] = [
  { href: '/link1', name: 'link 1', Icon: IconGitHub },
  { href: '/link2', name: 'link 2' },
];

export const Base: Story = {
  decorators: [withRouter],
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
      ]),
    }),
  },
  args: {},
  render: (props) => (
    <>
      <div className="flex">
        <RemixNavLink {...navLinks[0]} />
        <RemixNavLink {...navLinks[1]} />
      </div>
      <div className="mx-auto p-6 bg-white rounded-lg shadow-xl text-xl">
        <Outlet />
      </div>
    </>
  ),
};
