import { FC, PropsWithChildren } from "react";

import styles from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <main style={{ color: "var(--primary)" }} className="fit">
        {children}
      </main>
    </div>
  );
};

export default Layout;
