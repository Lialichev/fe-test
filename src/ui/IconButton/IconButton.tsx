type Props = {
  icon: string;
  isDisabled?: boolean;
  alt?: string;
  iconClassName?: string;
  onClick: () => void;
};

const IconButton = ({ isDisabled, icon, alt, iconClassName, onClick }: Props) => (
  <button
    className="w-9 h-9 flex items-center justify-center transition-colors duration-200 hover:bg-gray-100 disabled:opacity-50"
    disabled={isDisabled}
    onClick={onClick}
  >
    <img className={iconClassName} src={icon} alt={alt}/>
  </button>
);

export default IconButton;