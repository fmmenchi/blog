import { AnchorHTMLAttributes, ComponentType, ReactElement, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export interface NavLinkProps {
  href: string;
  name: string;
  Icon?: ComponentType<IconProps>;
}

export type NavLinkRenderFn = (props: NavLinkProps) => ReactElement<AnchorHTMLAttributes<HTMLHRElement>>;
