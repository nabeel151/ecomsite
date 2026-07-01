import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co."`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge."`,
  },
  {
    name: "James L.",
    text: `"The selection of clothes is diverse and on-point with latest trends."`,
  },
  {
    name: "David R.",
    text: `"Amazing quality and fast delivery. Highly recommended."`,
  },
  {
    name: "Emma T.",
    text: `"Beautiful products and excellent customer service."`,
  },
  {
    name: "John P.",
    text: `"Shop.co has become my favorite online store."`,
  },
];

function TestimonialCard({ item }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm h-full">
      <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
      <h3 className="font-bold text-lg mb-3">{item.name} ✓</h3>
      <p className="text-gray-500 text-sm leading-6">{item.text}</p>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );
  };

  const visibleCards = testimonials.slice(current, current + 3);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase">
            Our Happy Customers
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile: 1 card */}
        <div className="block md:hidden">
          <TestimonialCard item={testimonials[current]} />
        </div>

        {/* Desktop: only 3 cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCards.map((item, index) => (
            <TestimonialCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}