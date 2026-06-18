import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Properties from "../components/home/Properties";
import PropertyDetails from "../pages/PropertyDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
};

export default AppRoutes;