import { Trash2, Minus, Plus } from "lucide-react";

export default function CartItem({ item }) {
  return (
    <div className="flex justify-between gap-3 py-4 border-b border-b-gray-200 last:border-none">
      <div className="flex gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 sm:w-24 sm:h-24 rounded-xl bg-gray-100 object-cover"
        />

        <div>
          <h3 className="font-bold text-sm sm:text-lg">{item.name}</h3>

          <p className="text-[10px] sm:text-sm text-gray-500">
            Size: {item.size}
          </p>

          <p className="text-[10px] sm:text-sm text-gray-500">
            Color: {item.color}
          </p>

          <p className="text-lg sm:text-2xl font-bold mt-1">
            ${item.price}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <Trash2 className="text-red-500 cursor-pointer" size={16} />

        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
          <Minus size={14} className="cursor-pointer" />
          <span className="text-sm">1</span>
          <Plus size={14} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}