import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#f7f9fa] min-h-screen">

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <span
            className="px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "#e1bc91",
              color: "#0e1617",
            }}
          >
            Contact EstateHub
          </span>

          <h1 className="text-6xl font-bold mt-6 text-[#0e1617]">
            Let's Find Your
            <br />
            Dream Property
          </h1>

          <p className="text-gray-500 max-w-3xl mx-auto mt-6 text-lg">
            Have questions about buying, selling or
            investing in real estate? Our experts are
            here to help you every step of the way.
          </p>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-[32px] shadow-lg">

              <h2 className="text-3xl font-bold mb-8">
                Send Us A Message
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    outline-none
                  "
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    outline-none
                  "
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    outline-none
                  "
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    outline-none
                  "
                />

                <button
                  className="
                    px-8
                    py-4
                    rounded-xl
                    text-white
                    font-semibold
                  "
                  style={{
                    backgroundColor: "#62959c",
                  }}
                >
                  Send Message
                </button>

              </div>

            </div>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="bg-white p-8 rounded-[32px] shadow-lg">
                <h2 className="text-3xl font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">

                  <div className="flex gap-4">
                    <MapPin
                      size={24}
                      color="#62959c"
                    />
                    <div>
                      <h4 className="font-bold">
                        Office Address
                      </h4>
                      <p className="text-gray-500">
                        Bangalore, Karnataka,
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone
                      size={24}
                      color="#62959c"
                    />
                    <div>
                      <h4 className="font-bold">
                        Phone
                      </h4>
                      <p className="text-gray-500">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail
                      size={24}
                      color="#62959c"
                    />
                    <div>
                      <h4 className="font-bold">
                        Email
                      </h4>
                      <p className="text-gray-500">
                        info@estatehub.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock
                      size={24}
                      color="#62959c"
                    />
                    <div>
                      <h4 className="font-bold">
                        Working Hours
                      </h4>
                      <p className="text-gray-500">
                        Mon - Sat: 9 AM - 7 PM
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* CTA */}
              <div
                className="p-8 rounded-[32px] text-white"
                style={{
                  backgroundColor: "#62959c",
                }}
              >
                <h3 className="text-3xl font-bold">
                  Need Immediate Help?
                </h3>

                <p className="mt-4 text-white/90">
                  Speak directly with one of our
                  experienced property consultants.
                </p>

                <button
                  className="
                    mt-6
                    px-6
                    py-3
                    rounded-xl
                    bg-white
                    text-[#62959c]
                    font-semibold
                  "
                >
                  Call Now
                </button>
              </div>

            </div>

          </div>

          {/* Map */}
          <div className="mt-16">
            <div className="bg-white p-4 rounded-[32px] shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Bangalore&output=embed"
                className="
                  w-full
                  h-[450px]
                  rounded-[24px]
                "
              />
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default ContactUs;