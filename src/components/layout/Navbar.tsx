import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor: "rgba(247,249,250,0.95)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1
            className="text-3xl font-bold"
            style={{ color: "#62959c" }}
          >
            EstateHub
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-10">

          <Link
            to="/"
            className="font-medium hover:opacity-70"
            style={{ color: "#0e1617" }}
          >
            Home
          </Link>

          <Link
            to="/properties"
            className="font-medium hover:opacity-70"
            style={{ color: "#0e1617" }}
          >
            Properties
          </Link>
          <Link
            to="/agents"
            className="font-medium hover:opacity-70"
            style={{ color: "#0e1617" }}
          >
            Agents
          </Link>
          <Link
            to="/about"
            className="font-medium hover:opacity-70"
            style={{ color: "#0e1617" }}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="
              px-5
              py-3
              rounded-xl
              text-white
              font-medium
              transition-all
              hover:opacity-90
            "
            style={{
              backgroundColor: "#62959c",
            }}
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;