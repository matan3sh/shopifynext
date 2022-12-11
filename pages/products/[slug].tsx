import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Layout } from "@components/common";
import { getAllProductsPaths, getProduct } from "@framework/product";
import { getConfig } from "@framework/api/config";
import { Product } from "@common/types/product";
import { Container } from "@components/ui";

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <p>id: {product?.id}</p>
      <p>name: {product?.name}</p>
      <p>price value: {product?.price.value}</p>
      <p>price currency: {product?.price.currencyCode}</p>
      <p>description: {product?.description}</p>

      <h1 className="mb-4">OPTIONS</h1>
      <div>
        {product?.options.map((option) => (
          <div key={option.id}>
            <p>Name: {option.displayName}</p>
            {option.values.map((value) => (
              <div key={value.label}>
                <p>Label: {value.label}</p>
                <p>Hex Color: {value.hexColor}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h1 className="mb-4">VARIANTS</h1>
      <div>
        {product?.variants.map((variant) => (
          <div key={variant.id}>
            <p>Variant Name: {variant.name}</p>
            {variant.options.map((vo) => (
              <div key={vo.id}>
                <p>Name: {vo.displayName}</p>
                {vo.values.map((value) => (
                  <div key={value.label}>
                    <p>Label: {value.label}</p>
                    <p>Hexcolot: {value.hexColor}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Container>
  );
}

ProductDetailPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig();
  const { products } = await getAllProductsPaths(config);

  return {
    paths: products.map((product) => ({ params: { slug: product.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Pick<Product, "slug">>) => {
  const config = getConfig();
  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      product,
    },
  };
};
