import { useMemo, useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import SearchInput from "../../../SearchInput";
import IconButton from "../../../../ui/IconButton";
import Scrollbar from "../../../../ui/Scrollbar";
import { Column } from "../../types.ts";
import settingsIcon from "../../../../assets/settings.svg";
import checkIcon from "../../../../assets/check.svg";

type Props = {
  columns: Column[];
  toggleColumnVisibility?: (key: string) => void;
};

const SettingsAction = ({ columns, toggleColumnVisibility }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColumns = useMemo(() => {
    return columns.filter((column) =>
      column?.label?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, columns]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild className="group">
        <div>
          <IconButton
            className="!w-6 !h-6 hover:bg-gray-300 group-data-[state=open]:bg-gray-300"
            icon={settingsIcon}
            alt="Settings"
          />
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-white shadow-lg rounded-lg p-2 w-64 z-30 border border-gray-200"
          sideOffset={5}
          align="end"
        >
          <SearchInput value={searchQuery} onChange={setSearchQuery}/>
          <ScrollArea.Root className="h-96 mt-2 overflow-hidden">
            <ScrollArea.Viewport className="size-full pr-2">
              {
                filteredColumns.length
                  ? filteredColumns.map(({ key, hidden, label, notFilterable }) => (
                    <Checkbox.Root
                      key={key}
                      className="w-full px-2 mt-1 h-8 flex items-center justify-between outline-none border border-transparent rounded-md transition-colors duration-200 hover:bg-gray-100 focus-visible:border-blue-700 disabled:text-gray-500"
                      checked={!hidden}
                      disabled={notFilterable}
                      onCheckedChange={() => toggleColumnVisibility?.(key)}
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
            </ScrollArea.Viewport>
            <Scrollbar/>
          </ScrollArea.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default SettingsAction;