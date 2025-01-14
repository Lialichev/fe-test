import { Column } from "./types.ts";

const TableColumns = <T, >({ columns }: { columns: Column<T>[] }) => (
  columns.map(({ label }, i) => (
    <th
      className={`${i === 0 ? 'left-0 z-20' : ''} sticky top-0 border border-gray-200 bg-gray-100 px-2 py-2 uppercase text-gray-600 text-xs font-semibold`}
    >
      {label}
    </th>
  ))
);

export default TableColumns;