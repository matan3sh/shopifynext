import { FC, PropsWithChildren } from "react";

import styles from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main className={styles.root}>{children}</main>
    </>
  );
};

export default Layout;
