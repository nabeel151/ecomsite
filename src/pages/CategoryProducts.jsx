import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";
import ProductCard from "../components/ProductCard";

export default function CategoryProducts() {
  const { id } = useParams();
  const { categoryProducts, loading, fetchProductsByCategory } =
    useCategories();

  const [page, setPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetchProductsByCategory(id);
    setPage(1); // reset page when category changes
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20 text-lg font-medium">
        Loading products...
      </div>
    );
  }

  // Pagination Logic
  const totalPages = Math.ceil(categoryProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = categoryProducts.slice(startIndex, endIndex);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-black mb-10">
          CATEGORY PRODUCTS
        </h1>

        {/* Product Grid */}
        {currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    name: product.title,
                    image: product.images?.[0],
                    price: product.price,
                    rating: 4.5,
                  }}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
              {/* Prev */}
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
              >
                Prev
              </button>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`w-10 h-10 rounded-lg border ${
                    page === index + 1
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next */}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 border rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center py-10">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}