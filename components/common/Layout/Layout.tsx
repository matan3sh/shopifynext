import { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "@components/common";

import styles from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Navbar />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
