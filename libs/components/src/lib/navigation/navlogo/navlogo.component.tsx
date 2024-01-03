import { NavLink } from '@remix-run/react';
import { NavLogoRenderFn } from './navlogo.model';

export const RemixNavLogo: NavLogoRenderFn = ({ href, Logo }) => {
  return (
    <NavLink to={href}>
      <Logo />
    </NavLink>
  );
};
