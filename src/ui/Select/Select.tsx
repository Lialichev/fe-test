import * as SelectUI from "@radix-ui/react-select";
import { Option } from "./types.ts";

type Props = {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

const Select = ({ value, options, onChange }: Props) => (
  <SelectUI.Root value={value} onValueChange={onChange}>
    <SelectUI.Trigger
      className="flex items-center justify-between w-24 px-4 py-2 text-sm font-normal text-gray-600 rounded-md bg-gray-100 border border-gray-200"
    >
      <SelectUI.Value aria-label={value}>
        {value || "Select an option"}
      </SelectUI.Value>
      <SelectUI.Icon className="ml-2 w-4 h-4 text-xs text-blue-700"/>
    </SelectUI.Trigger>
    <SelectUI.Portal>
      <SelectUI.Content
        className="z-50 mt-1 overflow-hidden bg-white rounded shadow-lg border border-gray-200"
      >
        <SelectUI.Viewport className="p-2">
          {
            options.map((option) => (
              <SelectUI.Item
                key={option.value}
                value={option.value}
                className="px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 focus:bg-blue-50 focus:outline-none"
              >
                <SelectUI.ItemText>{option.label}</SelectUI.ItemText>
                <SelectUI.ItemIndicator className="text-blue-500 ml-2">✔</SelectUI.ItemIndicator>
              </SelectUI.Item>
            ))
          }
        </SelectUI.Viewport>
      </SelectUI.Content>
    </SelectUI.Portal>
  </SelectUI.Root>
);

export default Select;