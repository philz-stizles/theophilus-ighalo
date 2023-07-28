import { Stat } from '@/types';
import { IconType } from 'react-icons';
import { IoCode, IoDesktopSharp, IoFlag, IoGitCommitSharp, IoHappy, IoLibrary, IoTrailSign } from 'react-icons/io5';

export const stats: (Stat & { icon: IconType })[] = [
  {
    id: '1',
    icon: IoFlag,
    label: 'Projects Completed',
    figure: '50',
  },
  {
    id: '2',
    icon: IoHappy,
    label: 'Happy Clients',
    figure: '20',
  },
  {
    id: '3',
    icon: IoCode,
    label: 'Lines of code',
    figure: '102M',
  },
  {
    id: '4',
    icon: IoLibrary,
    label: 'NPM Libraries',
    figure: '10',
  },
  {
    id: '5',
    icon: IoTrailSign,
    label: 'Coding Challenges',
    figure: '100',
  },
];
