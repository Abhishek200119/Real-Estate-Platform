import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../components/home/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;