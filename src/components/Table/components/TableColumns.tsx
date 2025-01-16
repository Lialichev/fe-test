import { memo } from "react";
import clsx from "clsx";
import { Column } from "../types";

type Props = {
  columns: Column[];
};

const TableColumns = ({ columns }: Props) => (
  <tr className="text-xs font-semibold uppercase text-gray-600">
    {
      columns.map(({ key, label, action: ActionComponent, hidden }, i) => (
        <th
          key={key}
          className={clsx(
            'sticky top-0 last:border-r-0 border-r border-b border-gray-200 bg-gray-100 p-2',
            i === 0 && 'left-0 z-10',
            ActionComponent && 'right-0 z-10 border-l p-1',
          )}
          scope="col"
          hidden={hidden}
        >
          {ActionComponent ? <ActionComponent/> : label}
        </th>
      ))
    }
  </tr>
);

export default memo(TableColumns);