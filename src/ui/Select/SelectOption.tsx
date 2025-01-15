import * as SelectUI from "@radix-ui/react-select";
import { Option } from "./types.ts";

type Props = {
  option: Option;
};

const SelectOption = ({ option }: Props) => (
  <SelectUI.Item
    className="flex items-center px-4 py-2 text-sm text-gray-600 cursor-pointer hover:bg-gray-100 focus:bg-blue-50 focus:outline-none"
    value={option.value}
  >
    <SelectUI.ItemText>{option.label}</SelectUI.ItemText>
    <SelectUI.ItemIndicator className="text-blue-500 ml-2 pb-1">✔</SelectUI.ItemIndicator>
  </SelectUI.Item>
);

export default SelectOption;