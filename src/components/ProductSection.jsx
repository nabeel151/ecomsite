import ProductCard from "./ProductCard";
import { newArrivals, topSelling } from "../util/productdata";

export default function ProductSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* New Arrivals */}
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition">
            View All
          </button>
        </div>

        {/* Divider */}
        <div className="border-t  my-12"></div>

        {/* Top Selling */}
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-10">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topSelling.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}