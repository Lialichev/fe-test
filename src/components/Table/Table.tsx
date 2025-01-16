import * as ScrollArea from "@radix-ui/react-scroll-area";
import TableColumns from "./components/TableColumns";
import TableRows from "./components/TableRows";
import TableStatus from "./components/TableStatus";
import Scrollbar from "../../ui/Scrollbar";
import withTableContext from "./hocs/withTableContext";
import { useTableContext } from "./context/TableContext";

const Table = () => {
  const { columns, rows, label, loading, error } = useTableContext();

  return (
    <ScrollArea.Root
      className="w-full flex-grow mt-4 overflow-hidden rounded-tl-xl rounded-tr-xl border border-gray-200">
      <ScrollArea.Viewport className="size-full">
        {
          loading
            ? <TableStatus label="Loading Page" type="loading" />
            : error
              ? <TableStatus label="Opps, something went wrong" type="error" />
              : rows.length
                ? (
                  <table
                    className="table-auto w-max min-w-full border-separate border-spacing-0 border-hidden text-left"
                    aria-label={label}
                  >
                    <thead>
                    <TableColumns columns={columns}/>
                    </thead>
                    <tbody>
                    <TableRows rows={rows} columns={columns}/>
                    </tbody>
                  </table>
                )
                : <TableStatus label="Not found" type="warning" />
        }
      </ScrollArea.Viewport>
      <Scrollbar/>
    </ScrollArea.Root>
  );
};

export default withTableContext(Table);