'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { Hamburger } from '@/components/ui';
import { Container } from '@/components/layout';
import Image from 'next/image';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition ${
        colorChange ? 'py-3 bg-white app-shadow-b' : 'py-5 bg-transparent'
      }`}
    >
      {/* <Hamburger onClick={() => {}} /> */}
      <Container className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full w-10 h-10 grayscale-0"
            src="/images/theo_avatar.png"
            alt="Avatar"
            width={10}
            height={10}
          />

          <div className="uppercase text-lg leading-none">
            <h1>
              Theophilus <strong>Ighalo</strong>
            </h1>
            <p className="text-sm">
              <strong>Full stack</strong> Engineer
            </p>
          </div>
        </div>

        <nav className="flex-1 lg:flex hidden justify-center">
          <ul className="flex items-center gap-6">
            <NavItem href="/" label="Home" />
            <NavItem href="#portfolio" label="Portfolio" />
            <NavItem href="#services" label="Services" />
            <NavItem href="#about" label="About" />
            <NavItem href="#blog" label="Blog" />
            <NavItem href="#contact" label="Contact" />
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <IoLogoLinkedin />
          <IoLogoGithub />
        </div>
        <Hamburger />
      </Container>
    </div>
  );
};

type NavItemProps = {
  label: string;
  href: string;
  className?: string;
};

const NavItem = ({ label, href, className }: NavItemProps) => {
  return (
    <li className={`uppercase text-sm${className ? ` ${className}` : ''}`}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default Navbar;
