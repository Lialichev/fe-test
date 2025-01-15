import { useMemo } from "react";
import PaginationLimit from "./components/PaginationLimit.tsx";
import { Option } from "../../ui/Select";
import Input from "../../ui/Input";
import IconButton from "../../ui/IconButton";
import caretRightLineIcon from "../../assets/caret-right-line.svg";
import caretRightIcon from "../../assets/caret-right.svg";

type Props = {
  limit: number;
  total: number;
  page: number;
  limitOptions?: Option[];
  onChangeLimit: (limit: number) => void;
  onChangePage: (page: number) => void;
};

const Pagination = ({ limit, limitOptions, total, page, onChangeLimit, onChangePage }: Props) => {
  const realPage = page || 1;

  const [orderFirst, orderLast] = useMemo(() => {
    const first = (realPage - 1) * limit + 1;
    const last = Math.min(first + limit - 1, total);
    return [first, last];
  }, [realPage, limit, total]);

  const isNextDisabled = orderLast >= total;
  const isPrevDisabled = orderFirst === 1;

  const handlePageChange = (value: string | number) => {
    const numValue = Number(value);
    const maxPage = Math.ceil(total / limit);

    if (numValue >= 0 && numValue <= maxPage) {
      onChangePage(numValue);
    }
  }

  const handlePageIncrement = () => !isNextDisabled && handlePageChange(page + 1);
  const handlePageDecrement = () => !isPrevDisabled && handlePageChange(page - 1);
  const handlePageFirst = () => handlePageChange(1);
  const handlePageLast = () => handlePageChange(Math.ceil(total / limit));

  return (
    <div className="flex justify-between items-center p-2 rounded-bl-xl rounded-br-xl border border-gray-200">
      <PaginationLimit
        limit={limit}
        options={limitOptions}
        onChange={onChangeLimit}
      />
      <div className="flex items-center">
        <p className="uppercase text-gray-600 text-xs font-semibold">
          {orderFirst} - {orderLast} of {total}
        </p>
        <div className="flex items-center ml-2">
          <IconButton
            isDisabled={isPrevDisabled}
            icon={caretRightLineIcon}
            iconClassName="rotate-180"
            alt="First page"
            onClick={handlePageFirst}
          />
          <IconButton
            isDisabled={isPrevDisabled}
            icon={caretRightIcon}
            iconClassName="rotate-180"
            alt="Prev page"
            onClick={handlePageDecrement}
          />
          <Input
            value={String(page)}
            inputClassName="w-13 text-center"
            inputProps={{
              type: 'number',
              step: 1,
              min: 1,
              max: Math.ceil(total / limit),
              pattern: '[0-9]*',
              'aria-label': 'Page number',
            }}
            onChange={handlePageChange}
          />
          <IconButton isDisabled={isNextDisabled} icon={caretRightIcon} alt="Next page" onClick={handlePageIncrement}/>
          <IconButton isDisabled={isNextDisabled} icon={caretRightLineIcon} alt="Last page" onClick={handlePageLast}/>
        </div>
      </div>
    </div>
  );
};

export default Pagination;