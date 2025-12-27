import React from "react";
import AyanImg from "./images/Review1.png";
import RizwanImg from "./images/Review2.png";
import AsadImg from "./images/Review3.png";

const reviews = [
  {
    id: 1,
    name: "Ayan",
    image: AyanImg,
    review:
      "I order their furniture their furniture were very modern and stylish with affordable price",
  },
  {
    id: 2,
    name: "Rizwan",
    image: RizwanImg,
    review:
      "I order their furniture their furniture were very modern and stylish with affordable price",
  },
  {
    id: 3,
    name: "Asad",
    image: AsadImg,
    review:
      "I order their furniture their furniture were very modern and stylish with affordable price",
  },
];

const ReviewSection = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 ml-8">
        Reviews
      </h2>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            {/* User Image */}
            <div className="flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

            {/* Review Text */}
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
