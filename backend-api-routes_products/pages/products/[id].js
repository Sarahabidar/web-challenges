import useSWR from "swr";
import { useRouter } from "next/router";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product } = useSWR(`/api/products/${id}`, fetcher);

  if (!product) {
    return "loading";
    /*useSWR sends the fetch request.
    Initially, data is undefined because the request hasn't resolved yet. 
    we shoud wirte this if condition*/
  }
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.currency}</p>
      <p>{product.category}</p>
    </div>
  );
}
