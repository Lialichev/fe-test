import { ChangeEvent, InputHTMLAttributes, memo, ReactNode } from "react";
import clsx from "clsx";

type Props = {
  value: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  inputClassName?: string;
  className?: string;
  icon?: string | ReactNode;
  onChange: (value: string) => void;
};

const Input = ({ value, inputProps, inputClassName, className, icon, onChange }: Props) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.value);

  return (
    <label className={clsx(
      className,
      'flex items-center rounded-md p-2 bg-gray-100 border border-gray-200 focus-within:border-blue-700'
    )}>
      {icon && (
        typeof icon === "string" ? (
          <span className="mr-2 text-gray-500">{icon}</span>
        ) : (
          <span className="mr-2">{icon}</span>
        )
      )}
      <input
        className={clsx(
          inputClassName,
          'flex-1 outline-none bg-transparent placeholder-gray-600 text-gray-600 text-sm'
        )}
        {...inputProps}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default memo(Input);