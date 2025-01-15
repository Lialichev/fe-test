import { memo } from "react";
import Select, { Option } from "../../../ui/Select";
import { defaultLimitOptions } from "../constants";

type Props = {
  limit: number;
  options?: Option[];
  onChange: (limit: number) => void;
};

const PaginationLimit = ({ limit, options = defaultLimitOptions, onChange }: Props) => {
  const handleChangeLimit = (value: string) => onChange(Number(value));

  return (
    <div className="flex items-center">
      <Select
        value={String(limit)}
        options={options}
        onChange={handleChangeLimit}
      />
      <p className="ml-4 uppercase text-gray-600 text-xs font-semibold">
        Items per page
      </p>
    </div>
  );
};

export default memo(PaginationLimit);