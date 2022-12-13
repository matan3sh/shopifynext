import { FC, Children, isValidElement, PropsWithChildren } from "react";
import { useKeenSlider } from "keen-slider/react";
import styles from "./ProductSlider.module.css";

const ProductSlider: FC<PropsWithChildren> = ({ children }) => {
  const [sliderRef, _] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("changing to slide: ", s.details().relativeSlide);
    },
  });

  return (
    <div className={styles.root}>
      <div
        ref={sliderRef as any}
        className="keen-slider h-full transition-opacity"
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                } keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
