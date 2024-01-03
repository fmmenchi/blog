import type { Meta, StoryObj } from '@storybook/react';
import { RemixNavLogo } from './navlogo.component';

import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { Outlet } from '@remix-run/react';

import { ReactComponent as Logo } from '../../assets/logo-example.svg';
import { NavLogoProps } from './navlogo.model';

const meta: Meta<typeof RemixNavLogo> = {
  component: RemixNavLogo,
  title: 'Design System/Navigation/NavLogo',
};
export default meta;
type Story = StoryObj<typeof RemixNavLogo>;

const navLogo: NavLogoProps = { href: '/link1', Logo: () => <Logo height={'40px'} aria-label="f.m. dev" /> };

export const Base: Story = {
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: navLogo.href,
      },
      routing: reactRouterOutlets([
        {
          path: navLogo.href,
          element: <div>logo</div>,
        },
        {
          path: navLogo.href,
          element: <div>logo</div>,
        },
      ]),
    }),
  },
  args: { ...navLogo },
  render: (props) => (
    <>
      <RemixNavLogo {...props} />
      <div className="mx-auto p-6 bg-white rounded-lg shadow-xl text-xl">
        <Outlet />
      </div>
    </>
  ),
};
