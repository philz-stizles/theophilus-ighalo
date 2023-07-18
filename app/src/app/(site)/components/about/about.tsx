import { Container } from '@/components/layout';
import { Button, SectionHeader, ProgressBar } from '@/components/ui';
import { IoArrowForwardOutline, IoDownloadOutline } from 'react-icons/io5';

const AboutMe = () => {
  return (
    <section id="about" className="pt-16 pb-32">
      <Container>
        <SectionHeader title="About me" />
        <h3 className="uppercase text-2xl mb-3">
          Who <strong>am i</strong>?
        </h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex flex-col gap-6 font-medium text-[1rem] leading-6 text-gray-600">
            <p className="">
              Full Stack Developer with 6 years of experience in designing,
              developing, and implementing web applications. Proficient in both
              front-end and back-end technologies, adept at collaborating with
              cross-functional teams to deliver robust and scalable solutions.
            </p>
            <p className="">
              Proven ability to translate business requirements into technical
              specifications and deliver high-quality code on time. Strong
              problem-solving skills and a passion for staying up-to-date with
              the latest industry trends and technologies.
            </p>
            <div className="flex gap-3">
              <Button>
                <span>Contact</span>
                <IoArrowForwardOutline />
              </Button>
              <Button outlined>
                <IoDownloadOutline size={18} />
                <span>Download CV</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <ProgressBar title="React js" percent={80} />
              <ProgressBar title="Node js" percent={70} />
              <ProgressBar title="Flutter | Dart" percent={60} />
              <ProgressBar title="GraphQL" percent={70} />
              <ProgressBar title="AWS" percent={50} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
