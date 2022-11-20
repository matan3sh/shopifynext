import { ReactNode, FC } from "react";
import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
}

const Marquee: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Marquee;
