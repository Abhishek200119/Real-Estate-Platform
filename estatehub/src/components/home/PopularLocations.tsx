import { ArrowUpRight, MapPin } from "lucide-react";
import Image3 from "../../assets/3.jpg";
import Image4 from "../../assets/4.jpg";
import Image5 from "../../assets/5.jpg";
import Image6 from "../../assets/6.jpg";

const locations = [
  {
    city: "Bangalore",
    properties: "2,450+ Properties",
    image: Image3,
  },
  {
    city: "Mumbai",
    properties: "1,980+ Properties",
    image: Image4,
  },
  {
    city: "Delhi",
    properties: "2,100+ Properties",
    image: Image5,
  },
  {
    city: "Hyderabad",
    properties: "1,750+ Properties",
    image: Image6,
  },
];

const PopularLocations = () => {
  return (
    <section className="py-24 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#e1bc91",
              color: "#0e1617",
            }}
          >
            Explore Cities
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#0e1617]">
            Popular Locations
          </h2>

          <p className="text-gray-500 mt-4">
            Discover premium properties in India's
            most sought-after cities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {locations.map((location) => (
            <div
              key={location.city}
              className="group relative overflow-hidden rounded-[32px] h-[420px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.city}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} />
                  <span className="text-sm">
                    Prime Location
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  {location.city}
                </h3>

                <p className="text-white/80 mt-2">
                  {location.properties}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm">
                    Explore Now
                  </span>

                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:translate-x-1"
                    style={{
                      backgroundColor: "#62959c",
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PopularLocations;