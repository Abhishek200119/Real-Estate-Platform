const properties = [1, 2, 3, 4, 5, 6];

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Featured Properties
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={`https://picsum.photos/600/400?random=${item}`}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Luxury Villa
                </h3>

                <p className="text-gray-500 mt-2">
                  Bangalore, India
                </p>

                <h4 className="text-3xl font-bold text-[#62959c] mt-4">
                  ₹2.5 Cr
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;