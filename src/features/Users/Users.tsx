import { useCallback, useEffect, useState } from "react";
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

  const { users, total } = useUsers(debouncedSearchQuery, debouncedPage, debouncedLimit);

  const toggleColumnVisibility = useCallback((key: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.key === key ? { ...col, hidden: !col.hidden } : col
      )
    );
  }, []);

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
        columns={columns}
        rows={users}
        toggleColumnVisibility={toggleColumnVisibility}
        label="List of Users"
      />
      <Pagination limit={limit} total={total} page={page} onChangeLimit={setLimit} onChangePage={setPage}/>
    </>
  );
};

export default Users;