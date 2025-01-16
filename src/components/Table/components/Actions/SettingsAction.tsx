import { useCallback, useEffect, useMemo, useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Popover from '@radix-ui/react-popover';
import ColumnCheckboxList from "./ColumnCheckboxList";
import SearchInput from "../../../SearchInput";
import IconButton from "../../../../ui/IconButton";
import Scrollbar from "../../../../ui/Scrollbar";
import { useTableContext } from "../../context/TableContext";
import { LocalStorageUtils } from "../../../../utils/localStorage";
import settingsIcon from "../../../../assets/settings.svg";

const SettingsAction = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { columns, setColumns, id: tableId } = useTableContext();

  const filteredColumns = useMemo(() => {
    return columns.filter((column) =>
      column?.label?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, columns]);

  const handleColumnVisibility = useCallback((key: string, hidden: boolean) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.key === key ? { ...col, hidden } : col
      )
    );

    const storedColumns = LocalStorageUtils.getItem(tableId);
    if (storedColumns) {
      storedColumns[key] = hidden;
      LocalStorageUtils.setItem(tableId, storedColumns);
    }
  }, [tableId]);

  useEffect(() => {
    const storedColumns = LocalStorageUtils.getItem(tableId);

    if (storedColumns) {
      setColumns((prevColumns) =>
        prevColumns.map((col) => ({ ...col, hidden: storedColumns[col.key] }))
      );
    } else {
      const newStoredColumns = columns.reduce((acc: { [key: string]: boolean }, col) => {
        acc[col.key] = Boolean(col.hidden);
        return acc;
      }, {});

      LocalStorageUtils.setItem(tableId, newStoredColumns);
    }
  }, []);

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
              <ColumnCheckboxList columns={filteredColumns} handleColumnVisibility={handleColumnVisibility}/>
            </ScrollArea.Viewport>
            <Scrollbar/>
          </ScrollArea.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default SettingsAction;