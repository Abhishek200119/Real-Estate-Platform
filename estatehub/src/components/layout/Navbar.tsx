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
        <h1
          className="text-3xl font-bold"
          style={{ color: "#62959c" }}
        >
          EstateHub
        </h1>

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

          <button
            className="px-5 py-3 rounded-xl text-white font-medium"
            style={{ backgroundColor: "#62959c" }}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;