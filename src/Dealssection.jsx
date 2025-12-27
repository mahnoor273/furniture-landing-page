import React from "react";

const DealsSection = () => {
  return (
    <section className="py-20 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12">
        Why Our Deals Are Best
      </h2>

      {/* Boxes Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Box 1 */}
        <div className="bg-gray-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-black mb-3">
            Affordable Excellence
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Get premium wooden furniture at prices that fit your budget
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-gray-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-black mb-3">Crafted to Last</h3>
          <p className="text-gray-600 leading-relaxed">
            Each piece is built with quality wood for lasting durability
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-gray-50 shadow-md hover:shadow-lg transition duration-300 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-black mb-3">
            Modern Yet Timeless
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Designs that blend today's style with classic comfort
          </p>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
