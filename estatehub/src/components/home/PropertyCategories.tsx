const categories = [
  "Apartments",
  "Villas",
  "Commercial",
  "Farm House",
];

const PropertyCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Property Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-[#62959c] text-white rounded-3xl p-10 text-center"
            >
              <h3 className="text-2xl font-semibold">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;