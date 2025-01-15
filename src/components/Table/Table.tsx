import * as ScrollArea from "@radix-ui/react-scroll-area";
import TableColumns from "./components/TableColumns.tsx";
import TableRows from "./components/TableRows.tsx";
import Scrollbar from "../../ui/Scrollbar";
import { Column, Row } from "./types.ts";

type Props = {
  columns: Column[];
  rows: Row[];
  label?: string;
  toggleColumnVisibility?: (key: string) => void;
}

const Table = ({ columns, rows, label, toggleColumnVisibility }: Props) => (
  <ScrollArea.Root className="w-full flex-grow mt-4 overflow-hidden rounded-tl-xl rounded-tr-xl border border-gray-200">
    <ScrollArea.Viewport className="size-full">
      <table
        className="table-auto w-max min-w-full border-separate border-spacing-0 border-hidden text-left"
        aria-label={label}
      >
        <thead>
        <TableColumns columns={columns} toggleColumnVisibility={toggleColumnVisibility} />
        </thead>
        <tbody>
        <TableRows rows={rows} columns={columns}/>
        </tbody>
      </table>
    </ScrollArea.Viewport>

    <Scrollbar />
  </ScrollArea.Root>
);

export default Table;