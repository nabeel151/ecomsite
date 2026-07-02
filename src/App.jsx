import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetail from "./pages/Product_details";
import AddtoCard from "./pages/AddtoCard";
import AllProducts from "./pages/AllProducts";
import CategoryProducts from "./pages/CategoryProducts"; // ADD THIS

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-24">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* All Products */}
            <Route path="/products" element={<AllProducts />} />

            {/* Product Detail */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Cart */}
            <Route path="/cart" element={<AddtoCard />} />

            {/* Category Products */}
            <Route
              path="/category/:id"
              element={<CategoryProducts />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;