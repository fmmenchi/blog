import { ReactElement } from 'react';
import { SocialIconProps } from '../../social-icons';

interface HeaderProps {
  socialIcons?: ReactElement<SocialIconProps>[];
  copyright: string;
}

export const Footer = ({ copyright, socialIcons = [] }: HeaderProps) => {
  return (
    <footer className="flex items-center justify-evenly p-6 bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
      <small>{copyright}</small>

      {socialIcons.length > 0 ? (
        <address className=" flex gap-4 justify-center">{socialIcons.map((SocialIcon) => SocialIcon)}</address>
      ) : null}
    </footer>
  );
};
