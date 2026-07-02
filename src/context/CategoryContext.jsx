import { createContext, useEffect, useState } from "react";
import {
  getCategories,
  getCategoryProducts,
} from "../util/categoryService";

export const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  async function fetchAllCategories() {
    try {
      setLoading(true);
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchProductsByCategory(id) {
    try {
      setLoading(true);
      const data = await getCategoryProducts(id);
      setCategoryProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        categoryProducts,
        loading,
        fetchProductsByCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}