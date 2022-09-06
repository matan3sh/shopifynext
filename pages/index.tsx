import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  };
}
