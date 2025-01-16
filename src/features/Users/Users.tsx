import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";
import useDebounce from "../../hooks/useDebounce";
import useUsers from "./hooks/useUsers";
import { config } from "./config";

const Users = () => {
  const [columns, setColumns] = useState(config.columns);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const debouncedPage = useDebounce(page, 300);
  const debouncedLimit = useDebounce(limit, 300);

  const { users, total, loading, error } = useUsers(debouncedSearchQuery, debouncedPage, debouncedLimit);

  useEffect(() => {
    const isFirstPage = page === 1;
    if (!isFirstPage) {
      setPage(1);
    }
  }, [searchQuery, limit]);

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearchQuery}/>
      <Table
        id="users"
        loading={loading}
        error={error}
        columns={columns}
        rows={users}
        label="List of Users"
        setColumns={setColumns}
      />
      <Pagination limit={limit} total={total} page={page} onChangeLimit={setLimit} onChangePage={setPage}/>
    </>
  );
};

export default Users;