import { FC } from "react";

export type Column<T> = {
  key: keyof T & string;
  label: string;
  cell?: FC<any>;
  isSticky?: boolean;
}

export type Row<T> = T;