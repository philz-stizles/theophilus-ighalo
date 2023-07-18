import { services } from '@/data/services';
import { Container, Section } from '@/components/layout';
import { IconType } from 'react-icons';
import { Skill } from '@/types';
import { SectionHeader } from '@/components/ui';
import { LucideIcon } from 'lucide-react';

const Services = () => {
  return (
    <Section id="services">
      <Container>
        <SectionHeader title="My Services" />
        <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6">
          {services.map((skill) => (
            <ServiceCard
              key={skill.id}
              skill={skill}
              href={`/blogs/${skill.id}`}
            ></ServiceCard>
          ))}
        </div>
      </Container>
    </Section>
  );
};

type ServiceCardProps = {
  skill: Skill & { icon?: LucideIcon };
  href: string;
};

const ServiceCard = ({
  skill: { title, description, icon: Icon },
  href,
}: ServiceCardProps) => {
  return (
    <div className="p-10 flex-auto shadow-lg shadow-slate-100 border border-slate-200">
      {Icon && (
        <div className=" inline-flex items-center justify-center mb-4 p-2 text-slate-900 bg-slate-200 border border-slate-900">
          <Icon size={32} />
        </div>
      )}
      <h5 className="font-semibold text-xl mb-4">{title}</h5>
      <div className="font text-sm  text-slate-500">{description}</div>
      {/* {href && (
        <Link className="flex items-center gap-2 mt-16" href={href}>
          <small className="text-xs">Dive In</small>
          <IoArrowForward />
        </Link>
      )} */}
    </div>
  );
};

export default Services;
