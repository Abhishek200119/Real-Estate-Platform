import { Link } from "react-router-dom";
import { Bed, Bath, MapPin, Star } from "lucide-react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Whitefield, Bangalore",
    price: "₹4.5 Cr",
    beds: 5,
    baths: 4,
    area: "4500 Sq Ft",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Mumbai",
    price: "₹1.2 Cr",
    beds: 3,
    baths: 2,
    area: "1800 Sq Ft",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
  },
  {
    id: 3,
    title: "Penthouse",
    location: "Delhi",
    price: "₹6 Cr",
    beds: 4,
    baths: 4,
    area: "3800 Sq Ft",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
  },
  {
    id: 4,
    title: "Commercial Space",
    location: "Hyderabad",
    price: "₹3.2 Cr",
    beds: 0,
    baths: 4,
    area: "5000 Sq Ft",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
  },
  {
    id: 5,
    title: "Beach House",
    location: "Goa",
    price: "₹7.5 Cr",
    beds: 4,
    baths: 3,
    area: "4200 Sq Ft",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
  },
  {
    id: 6,
    title: "Farm House",
    location: "Pune",
    price: "₹5 Cr",
    beds: 6,
    baths: 5,
    area: "7000 Sq Ft",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
  },
];

const FeaturedProperties = () => {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-[#f7f9fa] min-h-screen">
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
              Featured Collection
            </span>

            <h2 className="text-5xl font-bold mt-6 text-[#0e1617]">
              Featured Properties
            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
              Discover handpicked luxury properties across
              India's most desirable locations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {properties.map((property) => (
              <div
                key={property.id}
                className="
                  bg-white
                  rounded-[32px]
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-72 w-full object-cover"
                  />

                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm"
                    style={{
                      backgroundColor: "#62959c",
                    }}
                  >
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">

                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-[#0e1617]">
                      {property.title}
                    </h3>

                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        fill="#facc15"
                        color="#facc15"
                      />
                      <span>{property.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 mt-3">
                    <MapPin size={16} />
                    {property.location}
                  </div>

                  <h4
                    className="text-3xl font-bold mt-5"
                    style={{
                      color: "#62959c",
                    }}
                  >
                    {property.price}
                  </h4>

                  <div className="flex justify-between mt-6 text-gray-600">
                    <span className="flex items-center gap-2">
                      <Bed size={18} />
                      {property.beds}
                    </span>

                    <span className="flex items-center gap-2">
                      <Bath size={18} />
                      {property.baths}
                    </span>

                    <span className="font-medium">
                      {property.area}
                    </span>
                  </div>

                  <Link
                    to={`/property/${property.id}`}
                    className="
                      block
                      mt-6
                      text-center
                      py-3
                      rounded-xl
                      text-white
                      font-medium
                    "
                    style={{
                      backgroundColor: "#62959c",
                    }}
                  >
                    View Details
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FeaturedProperties;