import { PropsWithChildren } from 'react';

type Props = { id?: string; className?: string };

const section = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <section id={id} className="pt-16 pb-32 min-h-screen">
      {children}
    </section>
  );
};

export default section;
