const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#f7f9fa] p-8 rounded-3xl"
            >
              <p>
                "Excellent service and amazing property
                options. Highly recommended."
              </p>

              <h4 className="font-bold mt-6">
                Client {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;