const locations = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Hyderabad",
];

const PopularLocations = () => {
  return (
    <section className="py-24 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Popular Locations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((city) => (
            <div
              key={city}
              className="bg-white rounded-3xl p-10 text-center shadow-md"
            >
              <h3 className="text-2xl font-semibold">
                {city}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;