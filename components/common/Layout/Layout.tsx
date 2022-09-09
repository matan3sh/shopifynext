import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
