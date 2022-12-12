import { FC, PropsWithChildren } from "react";
import styles from "./ProductSlider.module.css";

const ProductSlider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className="h-full transition-opacity">{children}</div>
    </div>
  );
};

export default ProductSlider;
