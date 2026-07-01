import { ArrowRight } from "lucide-react";

export default function OrderSummary() {
  return (
  <div className="border border-gray-200 rounded-2xl p-5 h-fit">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-semibold text-black">$565</span>
        </div>

        <div className="flex justify-between">
          <span>Discount (-20%)</span>
          <span className="text-red-500 font-semibold">-$113</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span className="font-semibold text-black">$15</span>
        </div>

<hr className="my-5 border-t border-gray-200" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>$467</span>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <input
          type="text"
          placeholder="Add promo code"
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none"
        />
        <button className="bg-black text-white px-5 rounded-full">
          Apply
        </button>
      </div>

      <button className="w-full mt-5 bg-black text-white py-4 rounded-full flex items-center justify-center gap-2">
        Go to Checkout <ArrowRight size={18} />
      </button>
    </div>
  );
}