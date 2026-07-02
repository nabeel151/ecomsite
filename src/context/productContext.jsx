import { createContext, useEffect, useState } from "react";
import { getProducts } from "../util/productService";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const limit = 8;

  async function fetchProducts(currentPage) {
    try {
      setLoading(true);

      const offset = (currentPage - 1) * limit;
      const data = await getProducts(offset, limit);

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        page,
        setPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}