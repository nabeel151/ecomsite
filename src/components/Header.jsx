import { useState } from "react";
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-black text-white text-[10px] sm:text-xs py-2 px-4 text-center relative">
        <span>
          Sign up and get 20% off to your first order{" "}
          <a href="#" className="underline font-semibold">
            Sign Up Now
          </a>
        </span>

        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          ✕
        </button>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight cursor-pointer">
                SHOP.CO
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-gray-700">
              <a href="#" className="flex items-center gap-1 hover:text-black">
                Shop <ChevronDown size={16} />
              </a>
              <a href="#" className="hover:text-black">
                On Sale
              </a>
              <a href="#" className="hover:text-black">
                New Arrivals
              </a>
              <a href="#" className="hover:text-black">
                Brands
              </a>
            </nav>
          </div>

          {/* Search */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[320px] xl:w-[420px]">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Search className="lg:hidden cursor-pointer" size={20} />

            <Link to="/cart">
              <ShoppingCart className="cursor-pointer" size={22} />
            </Link>

            <CircleUserRound className="cursor-pointer" size={22} />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-4 text-gray-700">
            <a href="#" className="flex items-center gap-1">
              Shop <ChevronDown size={16} />
            </a>
            <a href="#">On Sale</a>
            <a href="#">New Arrivals</a>
            <a href="#">Brands</a>
          </div>
        )}
      </div>
    </header>
  );
}