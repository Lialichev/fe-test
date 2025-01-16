import { memo } from "react";
import clsx from "clsx";
import errorIcon from "../../../assets/error.svg";
import warningIcon from "../../../assets/question.svg";
import loadingIcon from "../../../assets/loading.svg";

type Props = {
  label: string;
  type: "loading" | "error" | "warning";
}

const TableStatus = ({ label, type }: Props) => {
  const iconMap: Record<Props['type'], string> = {
    loading: loadingIcon,
    error: errorIcon,
    warning: warningIcon,
  };

  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center bg-gray-200">
      <div className={clsx(
        type === "loading" && "bg-green-100",
        type === "error" && "bg-red-100",
        type === "warning" && "bg-yellow-100",
        'flex items-center justify-center size-16 border border-black rounded-full'
      )}>
        <img src={iconMap[type]} alt={label}/>
      </div>
      <p className="mt-3 text-xl font-semibold">{label}</p>
    </div>
  );
};

export default memo(TableStatus);