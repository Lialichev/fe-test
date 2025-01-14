import searchIcon from '../../assets/searchIcon.svg';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange } : Props) => (
  <label className="flex items-center rounded-md p-2 bg-gray-100 border border-gray-200">
    <img className="mr-2" src={searchIcon} alt=""/>
    <input
      className="flex-1 outline-none bg-transparent placeholder-gray-600 text-gray-600 text-sm"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={({ target }) => onChange(target.value)}
      aria-label="Search"
    />
  </label>
);

export default SearchInput;