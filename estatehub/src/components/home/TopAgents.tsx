const TopAgents = () => {
  return (
    <section className="py-24 bg-[#f7f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Top Agents
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((agent) => (
            <div
              key={agent}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
            >
              <img
                src={`https://i.pravatar.cc/200?img=${agent + 10}`}
                className="w-28 h-28 rounded-full mx-auto"
              />

              <h3 className="text-2xl font-bold mt-5">
                Agent {agent}
              </h3>

              <p className="text-gray-500">
                Senior Property Consultant
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAgents;