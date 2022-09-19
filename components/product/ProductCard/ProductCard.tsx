import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@common/types/product";

interface IProps {
  product: Product;
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <a>
        <div>
          <h3>{product.name}</h3>
          <span>14 $</span>
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
