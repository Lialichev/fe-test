import * as ScrollArea from "@radix-ui/react-scroll-area";
import TableColumns from "./components/TableColumns.tsx";
import TableRows from "./components/TableRows.tsx";
import { Column, Row } from "./types.ts";

type Props<T> = {
  columns: Column<T>[];
  rows: Row<T>[];
  label?: string;
}

const Table = <T, >({ columns, rows, label }: Props<T>) => (
  <ScrollArea.Root className="w-full flex-grow mt-4 overflow-hidden rounded-tl-xl rounded-tr-xl border border-gray-200">
    <ScrollArea.Viewport className="w-full h-full">
      <table
        className="table-auto w-max border-separate border-spacing-0 border-hidden text-left"
        aria-label={label}
      >
        <thead>
        <TableColumns columns={columns} />
        </thead>
        <tbody>
        <TableRows rows={rows} columns={columns}/>
        </tbody>
      </table>
    </ScrollArea.Viewport>

    <ScrollArea.Scrollbar
      className="flex touch-none select-none bg-gray-200 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
      orientation="vertical"
    >
      <ScrollArea.Thumb
        className="relative flex-1 rounded-[10px] bg-gray-900 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-11 before:min-w-11 before:-translate-x-1/2 before:-translate-y-1/2"/>
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="flex touch-none select-none bg-gray-200 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
      orientation="horizontal"
    >
      <ScrollArea.Thumb
        className="relative flex-1 rounded-[10px] bg-gray-900 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2"/>
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="bg-gray-200"/>
  </ScrollArea.Root>
);

export default Table;