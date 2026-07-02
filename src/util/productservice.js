import { API } from "./config";

export async function getProducts(offset = 0, limit = 10) {
  const response = await fetch(
    `${API.products}?offset=${offset}&limit=${limit}`
    
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return await response.json();
}