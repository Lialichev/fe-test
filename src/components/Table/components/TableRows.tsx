import { ReactNode } from "react";
import clsx from "clsx";
import { Column, Row } from "../types.ts";

const TableRows = <T, >({ rows, columns }: { rows: Row<T>[], columns: Column<T>[] }) => (
  rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {columns.map(({ cell, key }, i) => {
        const CellComponent = cell;
        const cellValue = row[key] as ReactNode;

        return (
          <td
            key={key}
            className={clsx(i === 0 && 'sticky left-0 bg-white', 'px-2 py-4 border-r border-b border-gray-200 text-sm last:border-r-0')}
          >
            {
              CellComponent ? <CellComponent row={row} /> : cellValue
            }
          </td>
        );
      })}
    </tr>
  ))
);

export default TableRows;