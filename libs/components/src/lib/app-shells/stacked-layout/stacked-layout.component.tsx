import { PropsWithChildren, ReactNode } from 'react';

interface LayoutProps {
  header: ReactNode;
  footer?: ReactNode;
}

export const StackedLayout = ({ children, header, footer }: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
};
