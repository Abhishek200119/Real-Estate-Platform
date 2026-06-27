import { Star, ArrowUpRight } from "lucide-react";
import Image31 from "../../assets/31.jpg";
import Image32 from "../../assets/32.jpg";
import Image33 from "../../assets/33.jpg";

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Property Consultant",
    image: Image31,
    rating: "4.9",
    properties: "250+",
    experience: "10+ Years",
    specialization: ["Villas", "Luxury Homes"],
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Real Estate Advisor",
    image: Image32,
    rating: "4.8",
    properties: "180+",
    experience: "8+ Years",
    specialization: ["Apartments", "Commercial"],
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Luxury Property Expert",
    image: Image33,
    rating: "5.0",
    properties: "320+",
    experience: "12+ Years",
    specialization: ["Penthouses", "Beach Houses"],
  },
];

const TopAgents = () => {
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
            Meet Our Experts
          </span>

          <h2 className="text-5xl font-bold mt-6 text-[#0e1617]">
            Top Real Estate Agents
          </h2>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            Connect with experienced real estate professionals
            who help buyers and investors find the perfect
            property with confidence.
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {agents.map((agent) => (
            <div
              key={agent.id}
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
                group
              "
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="
                    w-28
                    h-28
                    rounded-full
                    object-cover
                    mx-auto
                    border-4
                    border-[#62959c]
                  "
                />

                <div
                  className="
                    absolute
                    right-1/2
                    translate-x-12
                    bottom-0
                    w-8
                    h-8
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    backgroundColor: "#62959c",
                  }}
                >
                  <Star
                    size={16}
                    fill="white"
                    color="white"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-[#0e1617]">
                  {agent.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {agent.role}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 text-center">

                <div>
                  <h4
                    className="font-bold text-xl"
                    style={{ color: "#62959c" }}
                  >
                    {agent.rating}
                  </h4>

                  <p className="text-xs text-gray-500">
                    Rating
                  </p>
                </div>

                <div>
                  <h4
                    className="font-bold text-xl"
                    style={{ color: "#62959c" }}
                  >
                    {agent.properties}
                  </h4>

                  <p className="text-xs text-gray-500">
                    Sold
                  </p>
                </div>

                <div>
                  <h4
                    className="font-bold text-xl"
                    style={{ color: "#62959c" }}
                  >
                    {agent.experience}
                  </h4>

                  <p className="text-xs text-gray-500">
                    Exp.
                  </p>
                </div>

              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {agent.specialization.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                    style={{
                      backgroundColor: "#e1bc91",
                      color: "#0e1617",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button
                className="
                  w-full
                  mt-8
                  py-3
                  rounded-xl
                  text-white
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                  group-hover:scale-[1.02]
                "
                style={{
                  backgroundColor: "#62959c",
                }}
              >
                View Profile
                <ArrowUpRight size={18} />
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TopAgents;