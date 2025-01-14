import { useEffect, useState } from "react";
import { normalizeUser } from "../utils/normalizeUser";

export type User = {
  id: number;
  fullName: string;
  username: string;
  email: string;
  birthday?: string,
  gender?: string,
  phone?: string,
  generalInfo?: string,
  ip?: string,
  macIp?: string,
  address?: string,
  bank?: string,
  university?: string,
  ein?: string,
  ssn?: string,
}

type UseUsersReturn = {
  users: User[];
  total: number;
  loading: boolean;
  error: boolean;
}

const useUsers = (searchQuery: string, page: number, limit: number): UseUsersReturn => {
  const [users, setUsers] = useState([]);
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
          `https://dummyjson.com/users/search?q=${searchQuery}&limit=${limit}&skip=${(page - 1) * limit}`,
          { signal }
        );
        const { users, total } = await response.json();

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
