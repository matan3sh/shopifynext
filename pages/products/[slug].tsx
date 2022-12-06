import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Layout } from "@components/common";
import { getAllProductsPaths, getProduct } from "@framework/product";
import { getConfig } from "@framework/api/config";

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div>{product.name}</div>
      <div>{product.slug}</div>
    </div>
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
}: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig();
  const { product } = await getProduct(config);
  return {
    props: {
      product,
    },
  };
};
