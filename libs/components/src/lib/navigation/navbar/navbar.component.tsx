import { NavLinkProps, NavLinkRenderFn } from '../navlink';

export interface NavbarProps {
  navLinks: NavLinkProps[];
  navLinkRenderFn: NavLinkRenderFn;
}

export const Navbar = ({ navLinks, navLinkRenderFn }: NavbarProps) => {
  return (
    <nav>
      <ul className="flex items-center text-base leading-5">
        {navLinks.map(({ href, name }) => (
          <li>
            {navLinkRenderFn({
              name,
              href,
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};
