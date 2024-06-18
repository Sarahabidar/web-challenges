import useSWR from "swr";
/*const fetcher = (...args) => fetch(...args).then(res => res.json())     it is same as below code 3-8*/
async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}
export default function Product() {
  const { data: product } = useSWR("/api/products", fetcher);
  if (!data) {
    return "Loading";
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.currency}</p>
            <p>{product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
