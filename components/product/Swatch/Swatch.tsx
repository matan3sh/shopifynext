import { FC } from "react";
import { Check } from "@components/icons";

import styles from "./Swatch.module.css";

interface Props {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
}

const Swatch: FC<Props> = ({ color, label, variant }) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={styles.root}
    >
      {/* <span>
        <Check />
      </span> */}
      {variant === "size" ? label : null}
    </button>
  );
};

export default Swatch;
