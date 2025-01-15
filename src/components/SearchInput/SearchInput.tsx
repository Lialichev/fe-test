import searchIcon from '../../assets/search.svg';
import Input from "../../ui/Input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange } : Props) => (
  <Input
    value={value}
    inputProps={{
      type: 'text',
      placeholder: "Search...",
      'aria-label': 'Search',
    }}
    icon={<img src={searchIcon} alt="search"/>}
    onChange={onChange}
  />
);

export default SearchInput;