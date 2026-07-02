import { API } from "./config";

export async function getCategories() {
  const response = await fetch(API.categories);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export async function getCategoryProducts(categoryId) {
  const response = await fetch(
    `${API.categories}/${categoryId}/products`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  return response.json();
}