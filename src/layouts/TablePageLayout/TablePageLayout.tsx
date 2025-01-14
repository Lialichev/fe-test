import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TablePageLayout = ({ children }: Props) => (
  <div className="h-screen flex flex-col p-8">
    {children}
  </div>
);

export default TablePageLayout;