import { NavLink } from '@remix-run/react';
import { NavLinkRenderFn } from './navlink.model';
import { classNames } from '../../utils';

export const RemixNavLink: NavLinkRenderFn = ({ href, name, Icon }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames(
          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium inline-flex items-center gap-4',
        )
      }
    >
      {Icon ? <Icon className="h-6 w-6 fill-current " /> : null}
      {name}
    </NavLink>
  );
};
