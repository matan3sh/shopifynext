import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
