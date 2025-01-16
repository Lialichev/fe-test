import React from 'react';
import { TableProvider } from '../context/TableContext'
import { TableProps } from "../types";

const withTableContext = (Component: React.FC) => {
  return (props: TableProps) => (
    <TableProvider {...props}>
      <Component />
    </TableProvider>
  );
};

export default withTableContext;
