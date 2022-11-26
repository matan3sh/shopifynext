import { FC } from "react";
import Link from "next/link";
import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@components/ui/context";

import styles from "./Usernav.module.css";

const Usernav: FC = () => {
  const ui = useUI();

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={ui.setSidebarOpen} />
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Usernav;
