import { FC, PropsWithChildren } from "react";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

import styles from "./Layout.module.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const ui = useUI();

  return (
    <div className={styles.root}>
      <Navbar />
      <Sidebar isOpen={ui.isSidebarOpen}>
        <CartSidebar />
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
