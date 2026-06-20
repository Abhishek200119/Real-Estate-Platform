import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Property Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#f7f9fa] min-h-screen">
        <div className="max-w-7xl mx-auto py-20 px-6">



          {/* Image */}
          <img
            src={property.image}
            alt={property.title}
            className="
              w-full
              h-[600px]
              object-cover
              rounded-[32px]
              shadow-lg
            "
          />

          {/* Property Info */}
          <div className="mt-10">

            <span
              className="px-4 py-2 rounded-full text-sm"
              style={{
                backgroundColor: "#e1bc91",
              }}
            >
              {property.type}
            </span>

            <h1 className="text-5xl font-bold mt-5">
              {property.title}
            </h1>

            <h2
              className="text-4xl font-bold mt-4"
              style={{
                color: "#62959c",
              }}
            >
              {property.price}
            </h2>

            <p className="mt-4 text-gray-500 text-lg">
              📍 {property.location}
            </p>

          </div>

          {/* Property Highlights */}
          <div className="mt-14">
            <h2 className="text-4xl font-bold mb-8">
              Property Highlights
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Bedrooms */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                  alt="Bedroom"
                  className="h-44 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold text-[#62959c]">
                    {property.bedrooms}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Luxury Bedrooms
                  </p>
                </div>
              </div>

              {/* Bathrooms */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
                  alt="Bathroom"
                  className="h-44 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold text-[#62959c]">
                    {property.bathrooms}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Designer Bathrooms
                  </p>
                </div>
              </div>

              {/* Area */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Area"
                  className="h-44 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-3xl font-bold text-[#62959c]">
                    {property.area}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Total Living Area
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                  alt="Property Status"
                  className="h-44 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#62959c]">
                    {property.status}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Property Status
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Description */}
          <div className="mt-14 bg-white p-8 rounded-[32px] shadow">
            <h2 className="text-3xl font-bold">
              Property Description
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div className="mt-14">
            <h2 className="text-3xl font-bold mb-6">
              Amenities
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {property.amenities.map((item) => (
                <div
                  key={item}
                  className="
                    bg-white
                    p-5
                    rounded-xl
                    shadow
                  "
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
          {/* Property Gallery */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              Property Gallery
            </h2>

            <div className="grid md:grid-cols-4 gap-4">

              <img
                src={property.image}
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000"
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000"
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000"
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

            </div>
          </div>

          {/* Luxury Features */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-10">
              Luxury Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Swimming Pool */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="Swimming Pool"
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Infinity Pool
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Relax in a luxurious private pool with stunning views.
                  </p>
                </div>
              </div>

              {/* Parking */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200"
                  alt="Parking"
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Smart Parking
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Spacious covered parking with advanced security.
                  </p>
                </div>
              </div>

              {/* Gym */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200"
                  alt="Gym"
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Fitness Center
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Fully equipped modern gym for a healthy lifestyle.
                  </p>
                </div>
              </div>

              {/* Garden */}
              <div className="group bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200"
                  alt="Garden"
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Private Garden
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Beautiful landscaped garden perfect for relaxation.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Room Showcase */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              Room Showcase
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Master Bedroom
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200"
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Modern Kitchen
                  </h3>
                </div>
              </div>

            </div>
          </div>

          {/* Nearby Places */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-10">
              Nearby Attractions
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Airport */}
              <div className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200"
                  alt="Airport"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    International Airport
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Just 8 Km Away
                  </p>
                </div>
              </div>

              {/* School */}
              <div className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
                  alt="School"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    International School
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Only 2 Km Away
                  </p>
                </div>
              </div>

              {/* Hospital */}
              <div className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200"
                  alt="Hospital"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    Multi-Speciality Hospital
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Just 1 Km Away
                  </p>
                </div>
              </div>

              {/* Mall */}
              <div className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1200"
                  alt="Mall"
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    Luxury Shopping Mall
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Only 3 Km Away
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* Similar Properties */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">
              Similar Properties
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {properties
                .filter((item) => item.id !== property.id)
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/property/${item.id}`}
                    className="
            bg-white
            rounded-3xl
            overflow-hidden
            shadow-lg
            hover:shadow-xl
            transition
          "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-60 w-full object-cover"
                    />

                    <div className="p-6">
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {item.location}
                      </p>

                      <h4 className="text-[#62959c] font-bold text-2xl mt-3">
                        {item.price}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>


          {/* Agent */}
          <div className="mt-16 bg-white rounded-[32px] p-8 shadow">
            <div className="flex items-center gap-6">

              <img
                src="https://i.pravatar.cc/200?img=11"
                alt="Agent"
                className="
                  w-24
                  h-24
                  rounded-full
                "
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Sarah Johnson
                </h3>

                <p className="text-gray-500">
                  Senior Property Consultant
                </p>

                <button
                  className="
                    mt-4
                    px-6
                    py-3
                    rounded-xl
                    text-white
                  "
                  style={{
                    backgroundColor: "#62959c",
                  }}
                >
                  Contact Agent
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default PropertyDetails;