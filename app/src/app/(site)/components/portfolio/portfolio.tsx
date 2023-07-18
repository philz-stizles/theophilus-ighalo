import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import PortfolioCard from '@/components/ui/cards/portfolio-card';
import SectionHeader from '@/components/ui/section-header/section-header';

const Portfolio = () => {
  return (
    <Section id="portfolio">
      <Container>
        <SectionHeader title="Portfolio" />
        {/* <div className="flex justify-center items-center gap-3">
          <Button label="Projects" />
          <Button label="Projects" outlined />
          <Button label="Projects" outlined />
          <Button label="Projects" outlined />
          <Button label="Projects" outlined />
        </div> */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-12">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
