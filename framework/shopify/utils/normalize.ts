import { ImageEdge, Product as ShopifyProduct } from "../schema";

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
  edges.map(({ node: { originalSrc: url, ...rest } }) => ({
    url:
      process.env.NEXT_PUBLIC_FRAMEWORK === "shopify_local"
        ? `/images/${url}`
        : url ?? "/product-image-placeholder.svg",
    ...rest,
  }));

export function normalizeProduct(productNode: ShopifyProduct): any {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
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
    ...rest,
  };

  return product;
}
