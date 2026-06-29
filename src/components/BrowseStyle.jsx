export default function BrowseStyle() {
  const styles = [
    {
      name: "Casual",
      image: "/public/images/image 15.png",
      wide: false,
    },
    {
      name: "Formal",
      image: "/public/images/image 16.png",
      wide: true,
    },
    {
      name: "Party",
      image: "/public/images/image 17.png",
      wide: true,
    },
    {
      name: "Gym",
      image: "/public/images/image 18.png",
      wide: false,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto bg-[#f2f0f1] rounded-[24px] sm:rounded-[40px] p-5 sm:p-8 lg:p-12">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-center mb-8 sm:mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
          {styles.map((item, index) => (
            <div
              key={index}
              className={`
                relative rounded-3xl overflow-hidden bg-white h-[180px] sm:h-[220px] md:h-[240px]
                ${item.wide ? "md:col-span-3" : "md:col-span-2"}
              `}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              <h3 className="absolute top-4 left-4 text-xl sm:text-2xl font-bold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}