'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import Hamburger from '@/components/ui/Hamburger/Hamburger';
import { Container } from '@/components/layout';

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window && window.scrollY >= 80) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window && window.addEventListener('scroll', changeNavbarColor);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
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
        <div className="flex">
          <div></div>
          <div className="uppercase text-lg">
            <h1>
              Theophilus <strong>Ighalo</strong>
            </h1>
            <p className="uppercase text-sm">Software Engineer</p>
          </div>
        </div>

        <nav className="flex-1 lg:flex hidden justify-center">
          <ul className="flex items-center gap-6">
            <NavItem href="/" label="Home" />
            <NavItem href="#portfolio" label="Portfolio" />
            <NavItem href="#testimonials" label="Testimonials" />
            <NavItem href="#about" label="About" />
            <NavItem href="/blog" label="Blog" />
            <NavItem href="/contact" label="Contact" />
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
