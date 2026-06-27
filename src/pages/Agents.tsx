import { Mail, Phone, Star } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image31 from "../assets/31.jpg";
import Image32 from "../assets/32.jpg";
import Image33 from "../assets/33.jpg";
import Image37 from "../assets/37.jpg";
const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Property Consultant",
    image: Image31,
    rating: "4.9",
    experience: "10+ Years",
    sold: "250+",
    phone: "+91 98765 43210",
    email: "sarah@estatehub.com",
    specialization: "Luxury Villas",
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Real Estate Advisor",
    image: Image32,
    rating: "4.8",
    experience: "8+ Years",
    sold: "180+",
    phone: "+91 98765 43211",
    email: "michael@estatehub.com",
    specialization: "Apartments",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Luxury Property Expert",
    image: Image33,
    rating: "5.0",
    experience: "12+ Years",
    sold: "320+",
    phone: "+91 98765 43212",
    email: "emma@estatehub.com",
    specialization: "Penthouses",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Commercial Specialist",
    image: Image37,
    rating: "4.7",
    experience: "9+ Years",
    sold: "210+",
    phone: "+91 98765 43213",
    email: "david@estatehub.com",
    specialization: "Commercial",
  },
];

const Agents = () => {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-[#f7f9fa] min-h-screen">
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
              Meet Our Experts
            </span>

            <h1 className="text-5xl font-bold mt-6 text-[#0e1617]">
              Our Real Estate Agents
            </h1>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
              Connect with experienced professionals who
              help buyers, sellers and investors make
              confident real estate decisions.
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {agents.map((agent) => (
              <div
                key={agent.id}
                className="
                  bg-white
                  rounded-[32px]
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >
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

                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold">
                    {agent.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {agent.role}
                  </p>
                </div>

                <div className="flex justify-center items-center gap-2 mt-4">
                  <Star
                    size={18}
                    fill="#facc15"
                    color="#facc15"
                  />

                  <span>{agent.rating}</span>
                </div>

                <div className="mt-6 space-y-2 text-center">
                  <p>
                    <strong>{agent.experience}</strong> Experience
                  </p>

                  <p>
                    <strong>{agent.sold}</strong> Properties Sold
                  </p>

                  <p
                    className="font-medium"
                    style={{
                      color: "#62959c",
                    }}
                  >
                    {agent.specialization}
                  </p>
                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} />
                    {agent.phone}
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} />
                    {agent.email}
                  </div>

                </div>

                <button
                  className="
                    w-full
                    mt-6
                    py-3
                    rounded-xl
                    text-white
                    font-medium
                  "
                  style={{
                    backgroundColor: "#62959c",
                  }}
                >
                  Contact Agent
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Agents;