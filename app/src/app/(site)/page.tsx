import {
  AboutMe,
  Portfolio,
  Skills,
  Stats,
  Testimonials,
} from '@/components/home';

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Portfolio />
      <Stats />
      <Testimonials />
    </main>
  );
}
