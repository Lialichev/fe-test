import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import SearchInput from "../../components/SearchInput";
import useDebounce from "../../hooks/useDebounce.ts";
import useUsers from "./hooks/useUsers.ts";
import { config } from "./config.ts";

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const debouncedPage = useDebounce(page, 300);
  const debouncedLimit = useDebounce(limit, 300);

  const { users, total } = useUsers(debouncedSearchQuery, debouncedPage, debouncedLimit);

  useEffect(() => {
    const isFirstPage = page === 1;
    if (!isFirstPage) {
      setPage(1);
    }
  }, [searchQuery, limit]);

  return (
    <>
      <SearchInput value={searchQuery} onChange={setSearchQuery}/>
      <Table columns={config.columns} rows={users}/>
      <Pagination limit={limit} total={total} page={page} onChangeLimit={setLimit} onChangePage={setPage}/>
    </>
  );
};

export default Users;