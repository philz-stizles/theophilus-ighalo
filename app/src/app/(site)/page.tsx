import { AboutMe, Contact, Portfolio, Skills, Stats, Testimonials } from './components';
import Blog from './components/blog/blog';

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
