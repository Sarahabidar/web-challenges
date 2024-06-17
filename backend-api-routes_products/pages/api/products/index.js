import { getAllProducts } from "../../../services/productServices.js";

export default function handler(request, response) {
  const product = getAllProducts();
  response.status(200).json(product);
}
