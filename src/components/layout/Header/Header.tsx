'use client';

import { Button } from '@/components/ui';
import { Container, Navbar } from '..';

const Header = () => {
  return (
    <header className="min-h-screen relative bg-slate-200">
      <Navbar />
      <Container>
        <div className="absolute top-1/4 w-1/3 -translate-y-1/5 flex flex-col items-start gap-8">
          <h2 className="text-3xl uppercase font-normal">
            <strong>Let&apos;s</strong> Collaborate &{' '}
            <strong>Build Awesome</strong> Projects <strong>Together</strong>
          </h2>
          <p className=" text-2xl font-light">
            I&apos;m a full stack developer based in{' '}
            <strong className="font-bold">Africa</strong>. I build secure full
            functional mobile-responsive web applications.
          </p>
          <Button>Let&apos;s Build Together</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
