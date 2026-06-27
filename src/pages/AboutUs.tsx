import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Image38 from "../assets/38.jpg";
const AboutUs = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#f7f9fa] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-24">

          {/* Hero */}
          <div className="text-center">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "#e1bc91",
                color: "#0e1617",
              }}
            >
              About EstateHub
            </span>

            <h1 className="text-6xl font-bold mt-6 text-[#0e1617]">
              Helping People Find
              <br />
              Their Perfect Home
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-gray-500 text-lg">
              EstateHub is a modern real estate platform
              connecting buyers, sellers and investors with
              premium properties across India.
            </p>
          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center">

            <img
  src={Image38}
  alt="About EstateHub"
  className="rounded-[32px] shadow-lg"
/>

            <div>
              <h2 className="text-4xl font-bold text-[#0e1617]">
                Who We Are
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                EstateHub is dedicated to making real estate
                buying, selling and investing simple and
                transparent. We provide access to verified
                listings, experienced agents and premium
                properties in top locations.
              </p>

              <p className="text-gray-600 mt-4 leading-8">
                Whether you're looking for luxury villas,
                modern apartments, commercial spaces or
                investment opportunities, our team helps you
                make confident decisions.
              </p>
            </div>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-24">

            <div className="bg-white p-8 rounded-[24px] text-center shadow">
              <h3 className="text-4xl font-bold text-[#62959c]">
                5000+
              </h3>
              <p className="mt-2 text-gray-500">
                Properties Listed
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px] text-center shadow">
              <h3 className="text-4xl font-bold text-[#62959c]">
                250+
              </h3>
              <p className="mt-2 text-gray-500">
                Expert Agents
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px] text-center shadow">
              <h3 className="text-4xl font-bold text-[#62959c]">
                10K+
              </h3>
              <p className="mt-2 text-gray-500">
                Happy Clients
              </p>
            </div>

            <div className="bg-white p-8 rounded-[24px] text-center shadow">
              <h3 className="text-4xl font-bold text-[#62959c]">
                4.9★
              </h3>
              <p className="mt-2 text-gray-500">
                Client Rating
              </p>
            </div>

          </div>

          {/* Mission */}
          <div className="mt-24 bg-white p-12 rounded-[32px] shadow">
            <h2 className="text-4xl font-bold text-center">
              Our Mission
            </h2>

            <p className="text-gray-600 text-center max-w-4xl mx-auto mt-6 leading-8">
              To transform the real estate experience through
              innovation, transparency and exceptional service,
              helping people discover properties that match
              their lifestyle and investment goals.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;