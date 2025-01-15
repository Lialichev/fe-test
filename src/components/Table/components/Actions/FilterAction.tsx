import IconButton from "../../../../ui/IconButton";
import settingsIcon from "../../../../assets/settings.svg";

const FilterAction = () => {
  return (
    <div className="flex items-center">
      <IconButton icon={settingsIcon} onClick={console.log} />
    </div>
  );
}

export default FilterAction;