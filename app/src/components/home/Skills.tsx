import { skills } from '@/data/skills';
import { Container } from '../layout';
import { IconType } from 'react-icons';
import { Skill } from '@/types';
import Link from 'next/link';
import { IoArrowForward } from 'react-icons/io5';

const Skills = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              href={`/blogs/${skill.id}`}
            ></SkillCard>
          ))}
        </div>
      </Container>
    </section>
  );
};

type SkillCardProps = {
  skill: Skill & { icon?: IconType };
  href: string;
};

const SkillCard = ({
  skill: { title, description, icon: Icon },
  href,
}: SkillCardProps) => {
  return (
    <div className="p-5 flex-auto w-1/4 shadow-lg shadow-slate-100 border border-slate-100">
      {Icon && (
        <div className=" inline-flex items-center justify-center rounded-full mb-4 p-2 bg-yellow-200 text-yellow-600">
          <Icon size={24} />
        </div>
      )}
      <h5 className="font-semibold text-xl mb-4">{title}</h5>
      <div className="font text-sm w-10/12 mb-16 text-slate-400">
        {description}
      </div>
      {href && (
        <Link className="flex items-center gap-2" href={href}>
          <small className="text-xs">Dive In</small>
          <IoArrowForward />
        </Link>
      )}
    </div>
  );
};

export default Skills;
