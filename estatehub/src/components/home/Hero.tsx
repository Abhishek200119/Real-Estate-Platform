import { Search, MapPin, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center"
      style={{ backgroundColor: "#f7f9fa" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <span
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "#e1bc91",
                color: "#0e1617",
              }}
            >
              Premium Real Estate
            </span>

            <h1
              className="text-5xl md:text-7xl font-bold mt-6 leading-tight"
              style={{ color: "#0e1617" }}
            >
              Find Your
              <br />
              Dream Home
            </h1>

            <p
              className="text-lg mt-6 max-w-xl"
              style={{ color: "#62959c" }}
            >
              Explore luxury villas, apartments and premium
              properties in the best locations across India.
            </p>

            {/* Search Box */}
            <div className="bg-white rounded-3xl shadow-xl p-5 mt-10">
              <div className="grid md:grid-cols-4 gap-4">

                <div className="flex items-center gap-2 border rounded-xl px-4">
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="outline-none py-3 w-full"
                  />
                </div>

                <select className="border rounded-xl px-4 py-3">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>

                <select className="border rounded-xl px-4 py-3">
                  <option>Budget</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2Cr</option>
                  <option>₹2Cr+</option>
                </select>

                <button
                  className="rounded-xl text-white font-semibold flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#62959c" }}
                >
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "#62959c" }}
                >
                  5000+
                </h3>
                <p>Properties</p>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "#62959c" }}
                >
                  250+
                </h3>
                <p>Agents</p>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "#62959c" }}
                >
                  50+
                </h3>
                <p>Cities</p>
              </div>

              <div>
                <h3
                  className="text-3xl font-bold"
                  style={{ color: "#62959c" }}
                >
                  10K+
                </h3>
                <p>Clients</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
              alt="Luxury Home"
              className="rounded-[40px] h-[650px] w-full object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div
              className="absolute bottom-6 left-6 bg-white rounded-3xl p-5 shadow-xl w-72"
            >
              <div className="flex items-center gap-2">
                <Building2
                  size={18}
                  color="#62959c"
                />
                <span className="font-semibold">
                  Luxury Villa
                </span>
              </div>

              <h3
                className="text-3xl font-bold mt-3"
                style={{ color: "#0e1617" }}
              >
                ₹2.5 Cr
              </h3>

              <p className="text-gray-500 mt-2">
                Whitefield, Bangalore
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <span>🛏 4 Beds</span>
                <span>🚿 3 Baths</span>
                <span>🚗 2 Parking</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;