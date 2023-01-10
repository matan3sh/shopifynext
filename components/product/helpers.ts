import { Product } from "@common/types/product";

export type AvailableChoices = "color" | "size";
export type Choices = {
  [T in AvailableChoices]: string;
};

export function getVariant(product: Product, choices: Choices) {
  const variant = product.variants.find((variant) => {
    const isMatchingChoice = variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLowerCase();
      if (optionName in choices) {
        if (
          choices[optionName as AvailableChoices] ===
          variantOption.values[0].label
        ) {
          return true;
        }
      }
      return false;
    });
    return isMatchingChoice;
  });
  return variant;
}
