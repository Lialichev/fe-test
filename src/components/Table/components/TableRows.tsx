import { ReactNode } from "react";
import clsx from "clsx";
import { Column, Row } from "../types";

type Props = {
  columns: Column[];
  rows: Row[];
};

const TableRows = ({ rows, columns }: Props) => (
  rows.map((row, rowIndex) => (
    <tr key={rowIndex} className="text-sm">
      {columns.map(({ cell, key, hidden }, i) => {
        const CellComponent = cell;
        const cellValue = row[key] as ReactNode;

        return (
          <td
            key={key}
            className={clsx(i === 0 && 'sticky left-0 bg-white', 'px-2 py-4 border-r border-b border-gray-200 last:border-r-0')}
            hidden={hidden}
          >
            {CellComponent ? <CellComponent row={row}/> : cellValue}
          </td>
        );
      })}
    </tr>
  ))
);

export default TableRows;