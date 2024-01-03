import { AnchorHTMLAttributes, ComponentType, ReactElement, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
}

export interface NavLogoProps {
  href: string;
  Logo: ComponentType<IconProps>;
}

export type NavLogoRenderFn = (props: NavLogoProps) => ReactElement<AnchorHTMLAttributes<HTMLHRElement>>;
