import { Link } from "react-router-dom";
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
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
            >
              <h2
                className="text-3xl font-bold"
                style={{ color: "#62959c" }}
              >
                EstateHub
              </h2>
            </Link>

            <p className="text-gray-300 mt-5 leading-7">
              Discover premium properties, luxury villas,
              apartments and commercial spaces across
              India's most desirable locations.
            </p>

            <div className="flex gap-4 mt-6">
              <FaFacebookF
                size={20}
                className="text-white hover:text-[#62959c] transition cursor-pointer"
              />

              <FaInstagram
                size={20}
                className="text-white hover:text-[#62959c] transition cursor-pointer"
              />

              <FaTwitter
                size={20}
                className="text-white hover:text-[#62959c] transition cursor-pointer"
              />

              <FaLinkedinIn
                size={20}
                className="text-white hover:text-[#62959c] transition cursor-pointer"
              />
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

              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-white transition"
                >
                  Properties
                </Link>
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

              <li>
                <Link
                  to="/property/1"
                  className="hover:text-white transition"
                >
                  Apartments
                </Link>
              </li>

              <li>
                <Link
                  to="/property/2"
                  className="hover:text-white transition"
                >
                  Luxury Villas
                </Link>
              </li>

              <li>
                <Link
                  to="/property/3"
                  className="hover:text-white transition"
                >
                  Penthouses
                </Link>
              </li>

              <li>
                <Link
                  to="/property/4"
                  className="hover:text-white transition"
                >
                  Commercial Spaces
                </Link>
              </li>

              <li>
                <Link
                  to="/property/5"
                  className="hover:text-white transition"
                >
                  Beach Houses
                </Link>
              </li>

              <li>
                <Link
                  to="/property/6"
                  className="hover:text-white transition"
                >
                  Farm Houses
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
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
          className="
            border-t
            mt-12
            pt-6
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
          "
          style={{
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <p className="text-gray-400 text-sm">
            © 2026 EstateHub. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;