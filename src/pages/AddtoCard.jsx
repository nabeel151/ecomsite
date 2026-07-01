import CartItem from "../components/addtocard/CartItem";
import OrderSummary from "../components/addtocard/OrderSummery";

export default function AddtoCard() {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/images/image 19.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/images/image 20.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/images/image 21.png",
    },
  ];

  return (
    <section className="w-full px-3 sm:px-5 md:px-8 lg:px-12 py-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-xs sm:text-sm text-gray-500 mb-3">
          Home &gt; Cart
        </p>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-black mb-6">
          YOUR CART
        </h1>

        {/* Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Cart Items */}
          <div className="w-full lg:w-[60%] border  border-gray-200 rounded-2xl p-3 sm:p-5">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[40%]">
            <OrderSummary />
          </div>
        </div>
      </div>
    </section>
  );
}