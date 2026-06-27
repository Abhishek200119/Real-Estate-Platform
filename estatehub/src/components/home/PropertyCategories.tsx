import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Image7 from "../../assets/7.jpg";
import Image8 from "../../assets/8.jpg";
import Image9 from "../../assets/9.jpg";
import Image10 from "../../assets/10.jpg";
import Image11 from "../../assets/11.jpg";
import Image12 from "../../assets/12.jpg";
const categories = [
  {
    id: 1,
    title: "Apartments",
    count: "1,250+ Properties",
    description:
      "Modern urban living with premium amenities and city connectivity.",
    image: Image7,
  },
  {
    id: 2,
    title: "Luxury Villas",
    count: "850+ Properties",
    description:
      "Private pools, spacious gardens and world-class interiors.",
    image: Image8,
  },
  {
    id: 3,
    title: "Penthouses",
    count: "450+ Properties",
    description:
      "Exclusive skyline views and premium living experiences.",
    image: Image9,
  },
  {
    id: 4,
    title: "Commercial",
    count: "620+ Properties",
    description:
      "Prime office spaces and retail opportunities for businesses.",
    image: Image10,
  },
  {
    id: 5,
    title: "Beach Houses",
    count: "280+ Properties",
    description:
      "Luxury waterfront homes with breathtaking ocean views.",
    image: Image11,
  },
  {
    id: 6,
    title: "Farm Houses",
    count: "340+ Properties",
    description:
      "Peaceful countryside retreats surrounded by nature.",
    image: Image12,
  },
];

const PropertyCategories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#e1bc91",
              color: "#0e1617",
            }}
          >
            Explore Categories
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#0e1617]">
            Property Categories
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto leading-8">
            Explore a wide range of premium real estate options,
            from luxury villas and modern apartments to commercial
            spaces and beachfront properties.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <Link
              key={item.id}
              to={`/property/${item.id}`}
              className="
                group
                relative
                h-[450px]
                overflow-hidden
                rounded-[32px]
                block
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                "
                style={{
                  background:
                    "linear-gradient(to top, rgba(98,149,156,0.3), transparent)",
                }}
              />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "#62959c",
                    }}
                  >
                    Premium Collection
                  </span>
                </div>

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/80 text-sm leading-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-5">
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                    {item.count}
                  </span>

                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                    Verified Listings
                  </span>
                </div>

                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wide">
                    Explore Properties
                  </span>

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: "#62959c",
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;