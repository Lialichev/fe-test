import PaginationLimit from "./components/PaginationLimit";
import { Option } from "../../ui/Select";
import Input from "../../ui/Input";
import IconButton from "../../ui/IconButton";
import { usePagination } from "./hooks/usePagination";
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
  const {
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
  } = usePagination({ limit, total, page, onChangePage });

  return (
    <div className="flex justify-between items-center p-2 rounded-bl-xl rounded-br-xl border border-t-0 border-gray-200">
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
            iconClassName="rotate-180"
            icon={caretRightIcon}
            alt="Prev page"
            onClick={handlePageDecrement}
          />
          <Input
            className="mx-1"
            inputClassName="w-13 text-center"
            inputProps={{
              type: 'number',
              step: 1,
              min: 1,
              max: maxPage,
              pattern: '[0-9]*',
              role: 'spinbutton',
              'aria-valuemin': 1,
              'aria-valuemax': maxPage,
              'aria-valuenow': page,
              'aria-label': 'Page number',
            }}
            value={String(page)}
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