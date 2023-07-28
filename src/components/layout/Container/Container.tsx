import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const Container = ({ children, className }: PropsWithChildren<Props>) => {
  const mergedClasses = ``;

  return <div className={`w-9/12 max-w-7xl mx-auto ${className?.trim() || ''}`}>{children}</div>;
};

export default Container;
