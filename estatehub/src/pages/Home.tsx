import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import FeaturedProperties from "../components/home/FeaturedProperties";
import PopularLocations from "../components/home/PopularLocations";
import PropertyCategories from "../components/home/PropertyCategories";
import TopAgents from "../components/home/TopAgents";
import Testimonials from "../components/home/Testimonials";
import CTABanner from "../components/home/CTABanner";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <PopularLocations />
      <PropertyCategories />
      <TopAgents />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
};

export default Home;