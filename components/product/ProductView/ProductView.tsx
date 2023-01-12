import { FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

import { Button, Container } from "@components/ui";
import { Product } from "@common/types/product";
import { ProductSlider, Swatch } from "@components/product";
import { useUI } from "@components/ui/context";
import useAddItem from "@framework/cart/use-add-item";

import { Choices, AvailableChoices, getVariant } from "../helpers";

import styles from "./ProductView.module.css";

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({ color: "", size: "" });

  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const variant = getVariant(product, choices);

  const addToCart = () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options,
      };

      alert(JSON.stringify(addItem(item)));
      openSidebar();
    } catch (error) {}
  };

  return (
    <Container>
      <div className={cn(styles.root, "fit", "mb-5")}>
        <div className={cn(styles.productDisplay, "fit")}>
          <div className={styles.nameBox}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url} className={styles.imageContainer}>
                <Image
                  className={styles.img}
                  src={image.url}
                  alt={image.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={styles.sidebar}>
          <section>
            {product.options.map((option) => (
              <div className="pb-4" key={option.id}>
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((value) => {
                    const optionKey =
                      option.displayName.toLowerCase() as AvailableChoices;
                    const activeChoice = choices[optionKey];

                    return (
                      <Swatch
                        key={`${option.id}-${value.label}`}
                        label={value.label}
                        color={value.hexColor}
                        variant={option.displayName}
                        active={value.label.toLowerCase() === activeChoice}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLowerCase()]:
                              value.label.toLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button className={styles.button} onClick={() => addToCart()}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
