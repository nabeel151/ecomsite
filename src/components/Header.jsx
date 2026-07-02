import { useState } from "react";
import {
  Search,
  ShoppingCart,
  CircleUserRound,
  ChevronDown,
  Menu,
  X,
  Shirt,
} from "lucide-react";
import { Link } from "react-router-dom";
import useCategories from "../hooks/useCategories";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const { categories, loading } = useCategories();

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
      </div>

      {/* Main Header */}
      <div className="px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Mobile Menu */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link to="/">
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
                SHOP.CO
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
              {/* Shop Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 hover:text-black font-medium"
                >
                  Shop
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showDropdown && (
                  <div className="absolute top-10 left-0 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl p-3 z-50">
                    <h3 className="px-3 pb-2 text-xs uppercase text-gray-400 font-semibold">
                      Categories
                    </h3>

                    {loading ? (
                      <p className="px-3 py-2">Loading...</p>
                    ) : (
                      categories.slice(0, 6).map((category) => (
                        <Link
                          key={category.id}
                          to={`/category/${category.id}`}
                          onClick={() => setShowDropdown(false)}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 transition"
                        >
                          <div className="bg-gray-100 p-2 rounded-full">
                            <Shirt size={18} />
                          </div>

                          <div>
                            <p className="font-medium text-gray-800">
                              {category.name}
                            </p>
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              <Link to="/sale" className="hover:text-black">
                On Sale
              </Link>

              <Link to="/products" className="hover:text-black">
                New Arrivals
              </Link>

              <Link to="/brands" className="hover:text-black">
                Brands
              </Link>
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
          <div className="flex items-center gap-4">
            <Search className="lg:hidden cursor-pointer" size={20} />

            <Link to="/cart">
              <ShoppingCart className="cursor-pointer" size={22} />
            </Link>

            <CircleUserRound className="cursor-pointer" size={22} />
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t pt-4 flex flex-col gap-3">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 font-medium"
            >
              Shop
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="ml-2 bg-gray-50 rounded-xl p-3 flex flex-col gap-2">
                {categories.slice(0, 6).map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setShowDropdown(false);
                    }}
                    className="px-3 py-2 rounded-lg hover:bg-gray-200"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/sale">On Sale</Link>
            <Link to="/products">New Arrivals</Link>
            <Link to="/brands">Brands</Link>
          </div>
        )}
      </div>
    </header>
  );
}