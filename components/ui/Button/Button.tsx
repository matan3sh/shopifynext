import { FC, ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button className={styles.root} type="button">
      {children}
    </button>
  );
};

export default Button;
