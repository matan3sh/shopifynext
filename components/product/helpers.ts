import { Product } from "@common/types/product";

export type AvailableChoices = "color" | "size";
export type Choices = {
  [T in AvailableChoices]: string;
};

export function getVariant(product: Product, choices: Choices) {
  return product.variants.find((variant) => {
    return variant.options.every((variantOption) => {
      const optionName =
        variantOption.displayName.toLowerCase() as AvailableChoices;

      if (optionName in choices) {
        return choices[optionName] === variantOption.values[0].label;
      }

      return false;
    });
  });
}
