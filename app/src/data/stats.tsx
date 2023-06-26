import { Stat } from '@/types';
import { IconType } from 'react-icons';
import { IoDesktopSharp, IoGitCommitSharp } from 'react-icons/io5';

export const stats: (Stat & { icon: IconType })[] = [
  {
    id: '1',
    icon: IoGitCommitSharp,
    label: 'Projects Completed',
    figure: '50',
  },
  {
    id: '2',
    icon: IoDesktopSharp,
    label: 'Happy Clients',
    figure: '20',
  },
  {
    id: '3',
    icon: IoDesktopSharp,
    label: 'Lines of code',
    figure: '102M',
  },
  {
    id: '4',
    icon: IoDesktopSharp,
    label: 'Devops Engineer',
    figure: '100K',
  },
];
