import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

const Button: FC<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(styles.root, className)} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
