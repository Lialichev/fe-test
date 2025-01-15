import { useEffect, useState } from "react";
import { normalizeUser } from "../utils/normalizeUser";
import { User } from "../types.ts";

type UseUsersReturn = {
  users: User[];
  total: number;
  loading: boolean;
  error: boolean;
}

const useUsers = (searchQuery: string, page: number, limit: number): UseUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://dummyjson.com/users/search?q=${searchQuery}&limit=${limit}&skip=${((page ? page : 1) - 1) * limit}`,
          { signal }
        );
        const { users, total } = await response.json();
        // should use zod for that, ah shit, here we go again

        setUsers(users.map(normalizeUser) || []);
        setTotal(total);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, [searchQuery, page, limit]);

  return {
    users,
    total,
    loading,
    error,
  };
};

export default useUsers;
