import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const image =
    product.image ||
    product.images?.[0] ||
    "https://via.placeholder.com/250?text=No+Image";

  const name = product.name || product.title || "Product";

  return (
    <Link to={`/product/${product.id}`} className="block w-full">
      <div className="w-full cursor-pointer hover:scale-105 transition duration-300">
        {/* Image */}
        <div className="bg-[#F0EEED] rounded-2xl p-4 h-[220px] sm:h-[260px] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/250?text=No+Image";
            }}
          />
        </div>

        {/* Info */}
        <div className="mt-3">
          <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
            {name}
          </h3>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-gray-500 text-xs">
              {product.rating || 4.5}/5
            </span>
          </div>

          <div className="mt-2">
            <span className="font-bold text-lg">${product.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}