import { FC } from "react";

export type Column<T> = {
  key: keyof T & string;
  label: string;
  cell?: FC<{ row: T }>;
  isSticky?: boolean;
};

export type Row<T> = T;