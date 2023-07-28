interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  textarea?: boolean;
  error?: string;
  isValid?: boolean;
  isTouched?: boolean;
}

const Input = ({
  label,
  type = 'text',
  placeholder,
  textarea = false,
  isValid = false,
  isTouched = false,
}: InputProps) => {
  const styles = 'border-2 border-slate-950 px-3 py-3 text-sm';
  const content = textarea ? (
    <textarea className={styles} placeholder={placeholder} rows={4}></textarea>
  ) : (
    <input className={styles} type={type} placeholder={placeholder} />
  );
  return (
    <div className="flex flex-col mb-4 w-full">
      {label && <label className="font-semibold mb-1">{label}</label>}
      {content}
    </div>
  );
};

export default Input;
