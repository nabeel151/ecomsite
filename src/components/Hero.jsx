export default function Hero() {
  return (
    <section className="w-full">
      {/* Hero */}
      <div
        className="
          relative overflow-hidden
          bg-no-repeat
         bg-[length:180%] sm:bg-[length:120%] lg:bg-cover
bg-center sm:bg-right
min-h-[950px] sm:min-h-[760px] lg:min-h-[650px]
        "
        style={{
          backgroundImage: "url('/images/Rectangle 2.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 min-h-[inherit] flex items-start lg:items-center">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 pt-10 lg:pt-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>

            <p className="text-gray-500 mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="mt-8 w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="relative pr-4 sm:pr-8">
                <h2 className="text-2xl md:text-4xl font-bold">200+</h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  International Brands
                </p>
                <div className="absolute right-0 top-1 h-10 sm:h-12 w-px bg-gray-300"></div>
              </div>

              <div className="relative pr-4 sm:pr-8">
                <h2 className="text-2xl md:text-4xl font-bold">2,000+</h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  High-Quality Products
                </p>
                <div className="absolute right-0 top-1 h-10 sm:h-12 w-px bg-gray-300"></div>
              </div>

              <div>
                <h2 className="text-2xl md:text-4xl font-bold">30,000+</h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="absolute top-14 right-6 sm:right-16 lg:right-28 text-4xl sm:text-6xl lg:text-8xl">
          ✦
        </div>

        <div className="absolute left-[8%] sm:left-[55%] top-[58%] lg:top-[40%] text-3xl sm:text-4xl lg:text-6xl">
          ✦
        </div>
      </div>

      {/* Brand Strip */}
      <div className="bg-black text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-8">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest">
            VERSACE
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em]">
            ZARA
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-serif tracking-wide">
            GUCCI
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-wider">
            PRADA
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-light italic">
            Calvin Klein
          </span>
        </div>
      </div>
    </section>
  );
}