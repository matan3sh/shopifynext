import cn from "classnames";
import { FC } from "react";
import { Container } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import styles from "./ProductView.module.css";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  return (
    <Container>
      <div className={cn(styles.root, "fit")}>
        <div className={cn(styles.productDisplay, "fit")}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              50
              {` `}$
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src={"/product-image-placeholder.svg"}
              alt={"Product Image"}
              width={1050}
              height={1050}
              quality="85"
            />
          </div>
        </div>
        <div className={styles.sidebar}>
          <section>
            <div className="pb-4">
              <h2 className="uppercase font-medium">Color</h2>
              <div className="flex flex-row py-4">Variant Options Here!</div>
            </div>
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <button
              onClick={() => {}}
              aria-label="Add to Cart"
              className={styles.button}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
