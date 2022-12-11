import { Product, ProductOptionsValues } from "@common/types/product";
import {
  ImageEdge,
  MoneyV2,
  Product as ShopifyProduct,
  ProductOption,
  ProductVariantConnection,
  SelectedOption,
} from "../schema";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url: `/images/${url}`,
    ...rest,
  }));

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => ({
  value: +amount,
  currencyCode,
});

const normalizeProductOption = ({
  id,
  name: displayName,
  values,
}: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map((value) => {
      let output: ProductOptionsValues = {
        label: value,
      };
      if (displayName.match(/colou?r/gi)) {
        output = {
          ...output,
          hexColor: value,
        };
      }
      return output;
    }),
  };

  return normalized;
};

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node;

    return {
      id,
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) => {
        const option = normalizeProductOption({ id, name, values: [value] });
        return option;
      }),
    };
  });
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options
      ? options
          .filter((option) => option.name !== "Title")
          .map((option) => normalizeProductOption(option))
      : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  };

  return product;
}
