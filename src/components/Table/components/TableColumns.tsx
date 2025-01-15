import clsx from "clsx";
import { Column } from "../types.ts";

const TableColumns = <T, >({ columns }: { columns: Column<T>[] }) => (
  <tr>
    {
      columns.map(({ key, label }, i) => (
        <th
          key={key}
          className={clsx(i === 0 && 'left-0 z-10', 'sticky top-0 border border-gray-200 bg-gray-100 p-2 uppercase text-gray-600 text-xs font-semibold')}
        >
          {label}
        </th>
      ))
    }
  </tr>
);

export default TableColumns;