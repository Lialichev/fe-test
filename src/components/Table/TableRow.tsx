import { ReactNode } from "react";
import { Column, Row } from "./types.ts";

const TableRows = <T, >({ rows, columns }: { rows: Row<T>[], columns: Column<T>[] }) => (
  rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {columns.map((col, i) => (
        <td
          key={col.key as string}
          className={`${i === 0 ? 'sticky left-0 bg-white' : ''} px-2 py-3 border border-gray-200 text-sm`}
        >
          {row[col.key] as ReactNode}
        </td>
      ))}
    </tr>
  ))
);

export default TableRows;