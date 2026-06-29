export default function ProductCard({ product }) {
  return (
    <div className="w-full">
      {/* Image Box */}
      <div className="bg-[#F0EEED] rounded-2xl p-4 h-[220px] sm:h-[260px] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-gray-500 text-xs">{product.rating}/5</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className="font-bold text-lg">${product.price}</span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          )}

          {product.discount && (
            <span className="bg-red-100 text-red-500 px-2 py-1 rounded-full text-xs">
              {product.discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}