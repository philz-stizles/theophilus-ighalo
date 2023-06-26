'use client';
import { Container, Navbar } from '@/components/layout';

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
            <strong className="font-bold">Africa</strong>. I build secure mobile
            responsive web applications.
          </p>
          <button className="px-6 py-3 border-2 border-slate-950 font-medium uppercase text-lg inline">
            Let&apos;s Build Together
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
