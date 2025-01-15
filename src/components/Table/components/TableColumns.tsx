import clsx from "clsx";
import { Column } from "../types.ts";

const TableColumns = <T, >({ columns }: { columns: Column<T>[] }) => (
  <tr>
    {
      columns.map(({ key, label, action }, i) => {
        const ActionComponent = action;

        return (
          <th
            key={key}
            className={clsx(
              i === 0 && 'left-0 z-10',
              'sticky top-0 last:border-r-0 border-r border-b border-r-gray-200 bg-gray-100 p-2 text-xs font-semibold uppercase text-gray-600'
            )}
            scope="col"
          >
            { ActionComponent ? <ActionComponent/> : label }
          </th>
        );
      })
    }
  </tr>
);

export default TableColumns;