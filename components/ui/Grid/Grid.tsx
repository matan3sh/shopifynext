import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Grid.module.css";

interface IProps {
  children: ReactNode[];
  layout?: "A" | "B";
}

const Grid: FC<IProps> = ({ children, layout = "A" }) => {
  const rootClassName = cn(styles.root, {
    [styles.layoutA]: layout === "A",
    [styles.layoutB]: layout === "B",
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
