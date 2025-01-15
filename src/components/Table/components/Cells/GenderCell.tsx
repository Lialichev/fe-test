import maleIcon from "../../../../assets/male.svg";
import femaleIcon from "../../../../assets/female.svg";

export type GenderCellProps = {
  row: { gender: 'Male' | 'Female' };
}

const GenderCell = ({ row }: GenderCellProps) => {
  return (
    <div className="flex items-center">
      <img className="mr-2" src={row.gender === 'Male' ? maleIcon : femaleIcon} alt={row.gender}/>
      <p>{row.gender}</p>
    </div>
  );
}

export default GenderCell;