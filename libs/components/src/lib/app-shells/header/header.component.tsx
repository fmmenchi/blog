import { ReactElement } from 'react';
import { NavLogoProps, NavbarProps } from '../../navigation';

interface HeaderProps {
  NavLogo: ReactElement<NavLogoProps>;
  Navbar?: ReactElement<NavbarProps>;
}

export const Header = ({ NavLogo, Navbar }: HeaderProps) => {
  return (
    <header className="flex gap-6 items-center">
      <h1 className="flex-shrink-0">{NavLogo}</h1>
      {Navbar}
    </header>
  );
};
