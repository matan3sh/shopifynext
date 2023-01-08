import { FC } from "react";
import { Check } from "@components/icons";

import styles from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  onClick: () => void;
}

const Swatch: FC<Props> = ({ color, label, variant, ...rest }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={styles.root}
      {...rest}
    >
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
