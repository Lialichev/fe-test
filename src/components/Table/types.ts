export type Column<T> = {
  key: keyof T;
  label: string;
  sticky?: boolean;
}

export type Row<T> = T;