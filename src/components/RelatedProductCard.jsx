export default function RelatedProductCard({ product }) {
  return (
    <div className="w-full">
      {/* Image Box */}
      <div className="bg-[#F0EEED] rounded-2xl h-[180px] sm:h-[220px] md:h-[250px] flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="font-semibold text-sm sm:text-base line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-gray-500 text-xs">{product.rating}/5</span>
        </div>

        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className="font-bold text-lg">${product.price}</span>

          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">
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