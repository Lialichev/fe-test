import * as SelectUI from "@radix-ui/react-select";
import SelectOption from "./SelectOption.tsx";
import { Option } from "./types.ts";

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

const Select = ({ value, options, onChange }: Props) => (
  <SelectUI.Root value={value} onValueChange={onChange}>
    <SelectUI.Trigger
      className="group flex items-center justify-between w-24 px-4 py-2 text-sm font-normal text-gray-600 rounded-md bg-gray-100 border border-gray-200 outline-none focus:border-blue-700 data-[state=open]:border-blue-700"
    >
      <SelectUI.Value aria-label={value}>
        {value || "Select an option"}
      </SelectUI.Value>
      <SelectUI.Icon className="ml-2 w-4 h-4 text-xs text-blue-700 transition-transform group-data-[state=open]:rotate-180"/>
    </SelectUI.Trigger>
    <SelectUI.Portal>
      <SelectUI.Content
        className="z-50 mt-1 w-24 overflow-hidden bg-white rounded shadow-lg border border-gray-200"
        position="popper"
        side="bottom"
        sideOffset={5}
      >
        <SelectUI.Viewport className="p-2">
          {
            options.map((option) => <SelectOption key={option.value} option={option} />)
          }
        </SelectUI.Viewport>
      </SelectUI.Content>
    </SelectUI.Portal>
  </SelectUI.Root>
);

export default Select;