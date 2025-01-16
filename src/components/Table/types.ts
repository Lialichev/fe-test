import { ComponentType, Dispatch, SetStateAction } from "react";

export type Column = {
  key: string;
  label?: string;
  cell?: ComponentType<any>;
  action?: ComponentType<any>;
  sticky?: boolean;
  hidden?: boolean;
  notFilterable?: boolean;
};

export type Row = {
  [key: string]: string | number;
};

export type TableProps = {
  id: string;
  columns: Column[];
  rows: Row[];
  setColumns: Dispatch<SetStateAction<Column[]>>;
  loading?: boolean;
  error?: boolean;
  label?: string;
}