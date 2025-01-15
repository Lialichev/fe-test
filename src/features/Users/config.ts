import { Column, FullNameCell, GenderCell } from "../../components/Table";
import FilterAction from "../../components/Table/components/Actions/SettingsAction.tsx";

type Config = {
  columns: Column[];
};

export const config: Config = {
  columns: [
    { key: 'fullName', label: 'Full Name', notFilterable: true, cell: FullNameCell },
    { key: 'birthday', label: 'Birthday' },
    { key: 'gender', label: 'Gender', cell: GenderCell },
    { key: 'email', label: 'Email', notFilterable: true },
    { key: 'username', label: 'Username', notFilterable: true },
    { key: 'generalInfo', label: 'General Info' },
    { key: 'ip', label: 'IP' },
    { key: 'macIp', label: 'MAC IP' },
    { key: 'address', label: 'Address' },
    { key: 'bank', label: 'Bank' },
    { key: 'university', label: 'University' },
    { key: 'company', label: 'Company' },
    { key: 'ein', label: 'Ein' },
    { key: 'ssn', label: 'SSN' },
    { key: 'filter', action: FilterAction },
  ],
}