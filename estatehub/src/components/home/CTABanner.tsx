import image1 from "../../assets/1.png";

const CTABanner = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <img
          src={image1}
          alt="CTA Banner"
          className="w-full rounded-[40px] object-cover shadow-xl"
        />
      </div>
    </section>
  );
};

export default CTABanner;