import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="mt-20"
      style={{ backgroundColor: "#0e1617" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#62959c" }}
            >
              EstateHub
            </h2>

            <p className="text-gray-300 mt-5 leading-7">
              Discover premium properties, luxury villas,
              apartments and commercial spaces across
              India's most desirable locations.
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#">
                <FaFacebookF
                  size={20}
                  className="text-white hover:text-[#62959c] transition"
                />
              </a>

              <a href="#">
                <FaInstagram
                  size={20}
                  className="text-white hover:text-[#62959c] transition"
                />
              </a>

              <a href="#">
                <FaTwitter
                  size={20}
                  className="text-white hover:text-[#62959c] transition"
                />
              </a>

              <a href="#">
                <FaLinkedinIn
                  size={20}
                  className="text-white hover:text-[#62959c] transition"
                />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: "#e1bc91" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Home
              </li>
              <li className="hover:text-white cursor-pointer">
                Properties
              </li>
              <li className="hover:text-white cursor-pointer">
                Agents
              </li>
              <li className="hover:text-white cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: "#e1bc91" }}
            >
              Property Types
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Apartments</li>
              <li>Luxury Villas</li>
              <li>Penthouses</li>
              <li>Commercial Spaces</li>
              <li>Farm Houses</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="text-xl font-semibold mb-5"
              style={{ color: "#e1bc91" }}
            >
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={18} />
                <span>Bangalore, Karnataka</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} />
                <span>info@estatehub.com</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div
          className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-gray-400 text-sm">
            © 2026 EstateHub. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;