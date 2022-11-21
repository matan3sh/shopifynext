import { FC, PropsWithChildren } from "react";
import { Footer } from "@components/common";

import styles from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
