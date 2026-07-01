import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../util/product_detail";
import reviews from "../util/reviews";
import relatedProducts from "../util/relatedProducts";
import RelatedProductCard from "../components/RelatedProductCard";
import { Minus, Plus } from "lucide-react";


export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          Home &gt; Shop &gt; Men &gt; T-shirts
        </div>

        {/* PRODUCT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-[110px_500px_1fr] gap-6 items-start">
          {/* THUMBNAILS */}
          <div className="order-2 lg:order-1 flex lg:flex-col gap-4 justify-center">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 md:w-24 md:h-28 rounded-2xl bg-[#F0EEED] border-2 cursor-pointer p-2 flex items-center justify-center ${
                  selectedImage === img
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="order-1 lg:order-2 bg-[#F0EEED] rounded-2xl h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center p-6">
            <img
              src={selectedImage}
              alt={product.name}
              className="max-w-[80%] max-h-[85%] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-3 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="text-yellow-400 text-lg">★★★★★</div>
              <span>{product.rating}/5</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-3xl font-bold">${product.price}</span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through text-3xl">
                  ${product.oldPrice}
                </span>
              )}

              {product.discount && (
                <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
                  {product.discount}
                </span>
              )}
            </div>

            <p className="text-gray-500 leading-7">
              {product.description}
            </p>

            <hr />

            {/* Colors */}
            <div>
              <p className="mb-4 text-gray-500">Select Colors</p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <hr />

            {/* Sizes */}
            <div>
              <p className="mb-4 text-gray-500">Choose Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-full transition ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <hr />

            {/* Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between bg-gray-100 rounded-full px-6 h-14 w-full sm:w-44">
                <button
                  onClick={() =>
                    setQuantity((prev) => Math.max(1, prev - 1))
                  }
                >
                  <Minus size={18} />
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  <Plus size={18} />
                </button>
              </div>

              <button className="flex-1 bg-black text-white rounded-full h-14 hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* REVIEWS SECTION */}
        <section className="mt-20">
          {/* Tabs */}
          <div className="border-b flex justify-center gap-6 md:gap-20 text-sm md:text-lg overflow-x-auto">
            <button className="text-gray-400 pb-4 whitespace-nowrap">
              Product Details
            </button>

            <button className="border-b-2 border-black font-semibold pb-4 whitespace-nowrap">
              Rating & Reviews
            </button>

            <button className="text-gray-400 pb-4 whitespace-nowrap">
              FAQs
            </button>
          </div>

          {/* Review Header */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-8">
            <h2 className="text-2xl font-bold">
              All Reviews <span className="text-gray-400">(451)</span>
            </h2>

            <div className="flex flex-wrap gap-3">
              <button className="bg-gray-100 px-4 py-2 rounded-full">
                Latest
              </button>

              <button className="bg-black text-white px-6 py-2 rounded-full">
                Write a Review
              </button>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className="text-yellow-400 text-lg">★★★★★</div>

                <h3 className="font-bold mt-3">
                  {review.name}
                  <span className="text-green-500 ml-2">✔</span>
                </h3>

                <p className="text-gray-500 mt-3 leading-6">
                  "{review.comment}"
                </p>

                <p className="text-gray-400 mt-5 text-sm">
                  Posted on {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-10">
            <button className="border border-gray-300 text-gray-700 px-10 py-3 rounded-full w-[220px] hover:bg-gray-100 transition">
              Load More Reviews
            </button>
          </div>
        </section>

<section className="mt-20 pb-16">
  <h2 className="text-3xl md:text-5xl font-black text-center mb-10 uppercase">
    You Might Also Like
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
    {relatedProducts.map((product) => (
      <RelatedProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
      </div>
    </div>
  );
}