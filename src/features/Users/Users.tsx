import { useMemo, useState } from "react";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/Table";
import useUsers from "./hooks/useUsers.ts";
import useDebounce from "../../hooks/useDebounce.ts";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(30);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const debouncedPage = useDebounce(page, 300);
  const debouncedLimit = useDebounce(limit, 300);

  const { users, total, loading, error } = useUsers(debouncedSearchQuery, debouncedPage, debouncedLimit);

  const columns = useMemo(() => Object.keys(users[0] || {}).map(key => ({ label: key, key })), [users]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  return (
    <>
      <SearchInput value={searchQuery} onChange={handleSearch}/>
      <Table columns={columns} rows={users}/>
      <div className="flex items-center justify-between">
        <div>Items per page: {limit}</div>
        <div>Pagination: 1-{limit} of {total}</div>
      </div>
    </>
  );
};

export default Users;