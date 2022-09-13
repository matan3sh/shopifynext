import { FC } from "react";
import { Product } from "@common/types/product";

interface IProps {
  product: Product;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
