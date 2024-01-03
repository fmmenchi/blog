import { ReactComponent as IconFacebook } from '@fmmenchi/icons/facebook.svg';
import { ReactComponent as IconGitHub } from '@fmmenchi/icons/github.svg';
import { ReactComponent as IconLinkedin } from '@fmmenchi/icons/linkedin.svg';
import { ReactComponent as IconMail } from '@fmmenchi/icons/mail.svg';
import { ReactComponent as IconTwitter } from '@fmmenchi/icons/twitter.svg';
import { ReactComponent as IconYoutube } from '@fmmenchi/icons/youtube.svg';

const iconTypes = {
  facebook: IconFacebook,
  github: IconGitHub,
  linkedin: IconLinkedin,
  mail: IconMail,
  twitter: IconTwitter,
  youtube: IconYoutube,
} as const;
type IconType = keyof typeof iconTypes;

const iconSizes = {
  s: 'text-xs',
  m: 'text-base',
  l: 'text-xl',
} as const;
type IconSize = keyof typeof iconSizes;

export interface SocialIconProps {
  type: IconType;
  href: string;
  size?: IconSize;
}

export const SocialIcon = ({ href, type, size = 'm' }: SocialIconProps): JSX.Element => {
  const Icon = iconTypes[type];
  const iconSize = iconSizes[size];

  return (
    <a
      className={`text-sm text-gray-500 transition hover:text-gray-600 ${iconSize} ${iconSize}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{type}</span>
      <Icon
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 `}
        width={'1em'}
        height={'1em'}
      />
    </a>
  );
};
