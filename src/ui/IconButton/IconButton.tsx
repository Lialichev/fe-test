type Props = {
  icon: string;
  isDisabled?: boolean;
  iconClassName?: string;
  alt?: string;
  onClick: () => void;
};

const IconButton = ({ isDisabled, icon, alt, iconClassName, onClick }: Props) => (
  <button
    className="w-9 h-9 outline-none border border-transparent rounded-md flex items-center justify-center transition-colors duration-200 hover:bg-gray-100 disabled:opacity-50 focus:border-blue-700"
    disabled={isDisabled}
    onClick={onClick}
    aria-label={alt}
    aria-disabled={isDisabled}
  >
    <img className={iconClassName} src={icon} alt={alt}/>
  </button>
);

export default IconButton;