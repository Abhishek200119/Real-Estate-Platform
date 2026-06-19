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

          {/* Back Home */}
          {/* <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mb-8
              px-5
              py-3
              rounded-xl
              text-white
            "
            style={{
              backgroundColor: "#62959c",
            }}
          >
            ← Back To Home
          </Link> */}

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

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-10">

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">
                🛏 {property.bedrooms}
              </h3>
              <p className="text-gray-500">
                Bedrooms
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">
                🚿 {property.bathrooms}
              </h3>
              <p className="text-gray-500">
                Bathrooms
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">
                📐 {property.area}
              </h3>
              <p className="text-gray-500">
                Area
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-xl">
                🏠 {property.status}
              </h3>
              <p className="text-gray-500">
                Status
              </p>
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