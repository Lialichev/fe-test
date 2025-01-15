import * as Avatar from "@radix-ui/react-avatar";

export type FullNameCellProps = {
  row: {
    image: string;
    fullName: string;
  };
}

const FullNameCell = ({ row }: FullNameCellProps) => {
  return (
    <div className="flex items-center">
      <Avatar.Root className="block mr-2 size-[32px] select-none overflow-hidden rounded-full border border-gray-200">
        <Avatar.Image
          className="size-full rounded-[inherit] object-cover"
          src={row.image}
          alt={row.fullName}
        />
      </Avatar.Root>

      <p className="font-medium">{row.fullName}</p>
    </div>
  );
}

export default FullNameCell;