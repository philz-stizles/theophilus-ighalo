import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons';

type Props = {
  label?: string;
  outlined?: boolean;
  flat?: boolean;
  iconRight?: IconType;
  iconLeft?: IconType;
};

const Button = ({ children, label, outlined = false, iconLeft: IconLeft, iconRight: IconRight }: PropsWithChildren<Props>) => {
  const bgCss = !outlined ? ' bg-slate-950 text-slate-50' : '';

  return (
    <button
      className={`px-6 py-3 border-2 border-slate-950 text-sm font-semibold uppercase flex justify-center items-center gap-1${bgCss}`}
    >
       
      {label || children}
       
    </button>
  );
};

export default Button;
