import { Search, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toLocaleString()}</>;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
        alt="Luxury Property"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            {/* Heading */}
            <h1 className="text-white text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.05]">
              Discover
              <span className="block text-[#e1bc91]">
                Luxury Living
              </span>
              Across India
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-lg md:text-xl mt-8 max-w-3xl leading-8">
              Explore premium villas, luxury apartments, penthouses,
              and investment properties in India's most desirable
              locations. Find your perfect home with confidence.
            </p>

            {/* Search Box */}
            <div className="mt-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-5 max-w-5xl shadow-2xl">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                {/* Location */}
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-4">
                  <MapPin size={20} className="text-white" />

                  <input
                    type="text"
                    placeholder="Enter Location"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-300"
                  />
                </div>

                {/* Property Type */}
                <select className="bg-white/10 rounded-2xl px-5 py-4 text-white outline-none cursor-pointer">
                  <option className="text-black">
                    Property Type
                  </option>
                  <option className="text-black">
                    Apartment
                  </option>
                  <option className="text-black">
                    Luxury Villa
                  </option>
                  <option className="text-black">
                    Penthouse
                  </option>
                  <option className="text-black">
                    Commercial
                  </option>
                </select>

                {/* Budget */}
                <select className="bg-white/10 rounded-2xl px-5 py-4 text-white outline-none cursor-pointer">
                  <option className="text-black">
                    Budget Range
                  </option>
                  <option className="text-black">
                    ₹50L - ₹1Cr
                  </option>
                  <option className="text-black">
                    ₹1Cr - ₹2Cr
                  </option>
                  <option className="text-black">
                    ₹2Cr - ₹5Cr
                  </option>
                  <option className="text-black">
                    ₹5Cr+
                  </option>
                </select>

                {/* Search Button */}
                <button className="bg-[#e1bc91] hover:bg-[#d6ac7a] text-[#0e1617] rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300">
                  <Search size={20} />
                  Search
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-5xl">
              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h3 className="text-[#e1bc91] text-3xl font-bold">
                  <Counter end={5000} />+
                </h3>
                <p className="text-gray-300 mt-2">
                  Properties
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h3 className="text-[#e1bc91] text-3xl font-bold">
                  <Counter end={250} />+
                </h3>
                <p className="text-gray-300 mt-2">
                  Agents
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h3 className="text-[#e1bc91] text-3xl font-bold">
                  <Counter end={50} />+
                </h3>
                <p className="text-gray-300 mt-2">
                  Cities
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
                <h3 className="text-[#e1bc91] text-3xl font-bold">
                  <Counter end={10000} />+
                </h3>
                <p className="text-gray-300 mt-2">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;