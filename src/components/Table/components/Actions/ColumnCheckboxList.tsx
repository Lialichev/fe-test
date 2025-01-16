import * as Checkbox from "@radix-ui/react-checkbox";
import checkIcon from "../../../../assets/check.svg";
import { Column } from "../../types";

type Props = {
  columns: Column[];
  handleColumnVisibility?: (key: string, hidden: boolean) => void;
};

const ColumnCheckboxList = ({ columns, handleColumnVisibility }: Props) => (
  <>
    {
      columns.length
        ? columns.map(({ key, hidden, label, notFilterable }) => (
          <Checkbox.Root
            key={key}
            className="w-full px-2 mt-1 h-8 flex items-center justify-between outline-none border border-transparent rounded-md transition-colors duration-200 hover:bg-gray-100 focus-visible:border-blue-700 disabled:text-gray-500"
            checked={!hidden}
            disabled={notFilterable}
            onCheckedChange={() => handleColumnVisibility?.(key, !hidden)}
            aria-label={label}
          >
            <p className="text-sm">{label}</p>
            <Checkbox.Indicator className="ml-2">
              <img src={checkIcon} alt="Check"/>
            </Checkbox.Indicator>
          </Checkbox.Root>
        ))
        : <p className="px-2 mt-2 text-sm text-gray-500">Not found...</p>
    }
  </>
);

export default ColumnCheckboxList;