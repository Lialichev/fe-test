import { FC } from "react";
import { Column, FullNameCell, GenderCell } from "../../components/Table";
import { User } from "./types.ts";

export const config: { columns: Column<User>[] } = {
  columns: [
    { key: 'fullName', label: 'full Name', cell: FullNameCell as FC<{ row: User }> },
    { key: 'birthday', label: 'birthday' },
    { key: 'gender', label: 'gender', cell: GenderCell as FC<{ row: User }> },
    { key: 'email', label: 'email' },
    { key: 'username', label: 'username' },
    { key: 'generalInfo', label: 'general Info' },
    { key: 'ip', label: 'ip' },
    { key: 'macIp', label: 'mac Ip' },
    { key: 'address', label: 'address' },
    { key: 'bank', label: 'bank' },
    { key: 'university', label: 'university' },
    { key: 'company', label: 'company' },
    { key: 'ein', label: 'ein' },
    { key: 'ssn', label: 'ssn' },
  ],
}