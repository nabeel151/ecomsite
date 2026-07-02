import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

export default function AllProducts() {
  const { products, loading, page, setPage } = useProducts();
  const totalPages = 10;

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black mb-10">ALL PRODUCTS</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
  <ProductCard
    key={product.id}
    product={{
      id: product.id,
      name: product.title,
      image:
        Array.isArray(product.images) && product.images.length > 0
          ? product.images[0]
          : "https://via.placeholder.com/300",
      price: product.price,
      rating: 4.5,
    }}
  />
))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-12 border-t pt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-medium">Page {page}</span>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}