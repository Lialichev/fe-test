import React, { createContext, useContext, ReactNode } from 'react';
import { TableProps } from "../types";

const TableContext = createContext<TableProps | undefined>(undefined);

export const TableProvider: React.FC<TableProps & { children: ReactNode }> = ({ children, ...props }) => (
  <TableContext.Provider value={props}>
    {children}
  </TableContext.Provider>
);

export const useTableContext = (): TableProps => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider');
  }
  return context;
};
