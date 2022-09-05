type FetcherParams = {
  query: string;
};

type FetcherResults<T> = {
  data: T;
};

const fetchApi = async <T>({
  query,
}: FetcherParams): Promise<FetcherResults<T>> => {
  const url = "http://localhost:4000/graphql";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  const { data, errors } = await res.json();

  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export default fetchApi;
