import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import BrowseStyle from "../components/BrowseStyle";
import Testimonials from "../components/Testimonals";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
   
      <Hero />
      <ProductSection />
      <BrowseStyle />
      <Testimonials />
  
    </>
  );
}