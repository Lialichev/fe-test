import { useCallback, useMemo } from "react";

type UsePaginationProps = {
  limit: number;
  total: number;
  page: number;
  onChangePage: (page: number) => void;
};

export const usePagination = ({ limit, total, page, onChangePage }: UsePaginationProps) => {
  const realPage = page || 1;
  const maxPage = Math.ceil(total / limit);

  const [orderFirst, orderLast] = useMemo(() => {
    const first = (realPage - 1) * limit + 1;
    const last = Math.min(first + limit - 1, total);
    return [first, last];
  }, [realPage, limit, total]);

  const isNextDisabled = orderLast >= total;
  const isPrevDisabled = orderFirst === 1;

  const handlePageChange = useCallback(
    (value: string | number) => {
      const numValue = Number(value);

      if (numValue >= 0 && numValue <= maxPage) {
        onChangePage(numValue);
      }
    },
    [maxPage, onChangePage]
  );

  const handlePageIncrement = useCallback(() => {
    if (!isNextDisabled) handlePageChange(page + 1);
  }, [isNextDisabled, handlePageChange, page]);
  const handlePageDecrement = useCallback(() => {
    if (!isPrevDisabled) handlePageChange(page - 1);
  }, [isPrevDisabled, handlePageChange, page]);
  const handlePageFirst = useCallback(() => handlePageChange(1), [handlePageChange]);
  const handlePageLast = useCallback(() => handlePageChange(maxPage), [handlePageChange, maxPage]);

  return {
    orderFirst,
    orderLast,
    maxPage,
    isNextDisabled,
    isPrevDisabled,
    handlePageChange,
    handlePageIncrement,
    handlePageDecrement,
    handlePageFirst,
    handlePageLast,
  };
};