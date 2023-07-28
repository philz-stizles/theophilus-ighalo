import { LucideIcon } from 'lucide-react';
import { MouseEvent, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  icon: LucideIcon;
  floating?: boolean;
  onClick?: (event: MouseEvent) => void;
  className?: string;
};

const IconButton = ({
  children,
  icon: Icon,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  return (
    <button
      className={twMerge(
        'flex justify-center items-center p-3 border-2 border-slate-950',
        className
      )}
      onClick={onClick}
    >
      {children || <Icon size={24} strokeWidth={2} />}
    </button>
  );
};

export default IconButton;
