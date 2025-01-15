import { ComponentType } from "react";

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