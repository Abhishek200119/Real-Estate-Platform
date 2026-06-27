import { Star, Quote } from "lucide-react";
import Image34 from "../../assets/34.jpg";
import Image35 from "../../assets/35.jpg";
import Image36 from "../../assets/36.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Home Buyer",
    image: Image34,
    property: "Luxury Villa",
    location: "Whitefield, Bangalore",
    review:
      "EstateHub helped us find our dream villa within just two weeks. The entire process was smooth, transparent and professional.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Property Investor",
    image: Image35,
    property: "Commercial Space",
    location: "Mumbai",
    review:
      "Their team guided me through every step of the investment journey. I found an excellent commercial property with great returns.",
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "Luxury Home Owner",
    image: Image36,
    property: "Penthouse",
    location: "Delhi NCR",
    review:
      "Outstanding service and premium listings. The agents were knowledgeable and made the entire buying experience stress-free.",
  },
];

const Testimonials = () => {
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
            Client Stories
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#0e1617]">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            Trusted by homeowners, investors and families
            across India. Hear what our clients have to say
            about their property journey with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="text-center">
            <h3
              className="text-4xl font-bold"
              style={{ color: "#62959c" }}
            >
              10K+
            </h3>
            <p className="text-gray-500 mt-2">
              Happy Clients
            </p>
          </div>

          <div className="text-center">
            <h3
              className="text-4xl font-bold"
              style={{ color: "#62959c" }}
            >
              4.9
            </h3>
            <p className="text-gray-500 mt-2">
              Average Rating
            </p>
          </div>

          <div className="text-center">
            <h3
              className="text-4xl font-bold"
              style={{ color: "#62959c" }}
            >
              5000+
            </h3>
            <p className="text-gray-500 mt-2">
              Properties Sold
            </p>
          </div>

        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#f7f9fa]
                rounded-[32px]
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Quote Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "#62959c",
                }}
              >
                <Quote
                  size={20}
                  className="text-white"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#fbbf24"
                    color="#fbbf24"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

              {/* Property Purchased */}
              <div className="mt-6">
                <span
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: "#e1bc91",
                    color: "#0e1617",
                  }}
                >
                  {item.property}
                </span>
              </div>

              {/* User */}
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-14
                    h-14
                    rounded-full
                    object-cover
                  "
                />

                <div>
                  <h4 className="font-bold text-[#0e1617]">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.role}
                  </p>

                  <p className="text-gray-400 text-xs">
                    {item.location}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;