import { ReactNode, FC } from "react";
import ReactFastMarquee from "react-fast-marquee"; // import package here
import cn from "classnames";

import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
  direction?: "left" | "right";
  variant?: "primary" | "secondary";
  gradient?: boolean;
}

const Marquee: FC<Props> = ({
  children,
  direction = "left",
  variant = "primary",
  gradient,
}) => {
  const rootClassName = cn(styles.root, {
    [styles.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      <ReactFastMarquee
        speed={50}
        gradient={gradient}
        direction={direction}
        loop={0}
        play={true}
      >
        <div className={styles.container}>{children}</div>
      </ReactFastMarquee>
    </div>
  );
};

export default Marquee;
