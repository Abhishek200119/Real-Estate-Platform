import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image13 from "../assets/13.jpg";
import Image14 from "../assets/14.jpg";
import Image15 from "../assets/15.jpg";
import Image16 from "../assets/16.jpg";
import Image17 from "../assets/17.jpg";
import Image18 from "../assets/18.jpg";
import Image19 from "../assets/19.jpg";
import Image20 from "../assets/20.jpg";
import Image21 from "../assets/21.jpg";
import Image22 from "../assets/22.jpg";
import Image23 from "../assets/23.jpg";
import Image24 from "../assets/24.jpg";
import Image25 from "../assets/25.jpg";
import Image26 from "../assets/26.jpg";
import Image27 from "../assets/27.jpg";
import Image28 from "../assets/28.jpg";
import Image29 from "../assets/29.jpg";
import Image30 from "../assets/30.jpg";
import Image31 from "../assets/31.jpg";

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
                  src={Image13}
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
                  src={Image14}
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
                  src={Image15}
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
                  src={Image16}
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
                src={Image17}
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src={Image18}
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src={Image19}
                alt=""
                className="rounded-3xl h-64 w-full object-cover"
              />

              <img
                src={Image20}
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
                  src={Image21}
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
                  src={Image22}
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
                  src={Image23}
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
                  src={Image24}
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
                  src={Image25}
                  className="h-72 w-full object-cover"
                  alt="Master Bedroom"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    Master Bedroom
                  </h3>
                </div>
              </div>

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={Image26}
                  className="h-72 w-full object-cover"
                  alt="Modern Kitchen"
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
                  src={Image27}
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
                  src={Image28}
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
                  src={Image29}
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
                  src={Image30}
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

          {/* Agent */}
          <div className="mt-16 bg-white rounded-[32px] p-8 shadow">
            <div className="flex items-center gap-6">

              <img
                src={Image31}
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
