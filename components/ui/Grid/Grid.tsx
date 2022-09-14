import { FC, PropsWithChildren } from "react";

const Grid: FC<PropsWithChildren> = ({ children }) => {
  return <div className="root-grid">{children}</div>;
};

export default Grid;
