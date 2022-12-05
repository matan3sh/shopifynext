import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Layout } from "@components/common";

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{product.slug}</div>;
}

ProductDetailPage.Layout = Layout;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "cool-hat" } },
      { params: { slug: "t-shirt" } },
      { params: { slug: "lightweight-jacket" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  return {
    props: {
      product: {
        slug: params?.slug,
      },
    },
  };
};
