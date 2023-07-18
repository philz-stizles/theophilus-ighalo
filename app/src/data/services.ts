import { Skill } from '@/types';
import {
  CloudCog,
  Container,
  Globe2,
  LucideIcon,
  MonitorSmartphone,
  Server,
  ServerCog,
} from 'lucide-react';

export const services: (Skill & { icon: LucideIcon })[] = [
  {
    id: '1',
    icon: Globe2,
    title: 'Web Development',
    description:
      'Build secure, mobile responsive web applications, with performance and SEO optimization.',
  },
  {
    id: '2',
    icon: MonitorSmartphone,
    title: 'Mobile Development',
    description:
      'Build secure, native, multi-platform mobile applications, with performance and SEO optimization.',
  },
  {
    id: '3',
    icon: Server,
    title: 'Backend Development',
    description:
      'Build secure, mobile responsive web applications, with performance and SEO optimization.',
  },
  {
    id: '4',
    icon: ServerCog,
    title: 'DevOps',
    description:
      'Build secure, mobile responsive web applications, with performance and SEO optimization.',
  },
  {
    id: '5',
    icon: CloudCog,
    title: 'Web Apps & SaaS',
    description:
      'Build secure, mobile responsive web applications, with performance and SEO optimization.',
  },
  {
    id: '6',
    icon: Container,
    title: 'Containerization',
    description:
      'Build secure, mobile responsive web applications, with performance and SEO optimization.',
  },
];
