import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@common/types/product";

import styles from "./ProductCard.module.css";

interface IProps {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <a className={styles.root}>
        <div className={styles.productTag}>
          <h3 className={styles.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={styles.productPrice}>14 $</span>
        </div>

        {product.images && (
          <Image
            alt={product.name ?? "Product image"}
            src={product.images[0].url ?? placeholderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </a>
    </Link>
  );
};

export default ProductCard;
