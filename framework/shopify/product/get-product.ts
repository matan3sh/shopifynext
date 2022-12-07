import { ApiConfig } from "@common/types/api";
import { getProductQuery } from "@framework/utils";

const getProduct = async (config: ApiConfig): Promise<any> => {
  const { data } = await config.fetch({
    query: getProductQuery,
    url: config.apiUrl,
  });

  return {
    product: {
      name: "My Product",
      slug: "my-product",
    },
  };
};

export default getProduct;
