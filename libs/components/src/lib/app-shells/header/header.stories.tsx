import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.component';
import { reactRouterOutlets, reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';
import { Navbar, RemixNavLink, RemixNavLogo } from '../../navigation';
import { ReactComponent as Logo } from '../../assets/logo-example.svg';
import { Outlet } from '@remix-run/react';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Design System/App Shells/Header',
  decorators: [withRouter],
};
export default meta;
type Story = StoryObj<typeof Header>;

const navLogo = { href: '/link1', Logo: () => <Logo height={'40px'} aria-label="f.m. dev" /> };

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
    //logo: 'Logo',
    NavLogo: <RemixNavLogo Logo={navLogo.Logo} href={navLogo.href} />,
    Navbar: <Navbar navLinkRenderFn={RemixNavLink} navLinks={navLinks} />,
  },
  render: (props) => (
    <>
      <Header {...props} />
      <div className="mx-auto p-6 bg-white rounded-lg shadow-xl text-xl">
        <Outlet />
      </div>
    </>
  ),
};
