import { memo } from "react";
import Input from "../../ui/Input";
import searchIcon from '../../assets/search.svg';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange } : Props) => (
  <Input
    value={value}
    inputProps={{
      type: 'text',
      placeholder: 'Search...',
      role: 'search',
      'aria-label': 'Search',
      'aria-placeholder': 'Search...'
    }}
    icon={<img src={searchIcon} alt="search"/>}
    onChange={onChange}
  />
);

export default memo(SearchInput);