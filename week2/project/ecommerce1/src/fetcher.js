const fetcher = async (ep) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const res = await fetch(`${baseUrl}${ep}`);
  if (!res.ok) {
    const err = `Something went wrong: ${res.status}`;
    throw new Error(err);
  }
  const data = await res.json();
  return data;
};

export default fetcher;
