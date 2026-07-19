import React from "react";
import {
  FaAward,
  FaLeaf,
  FaPepperHot,
  FaSmile,
} from "react-icons/fa";

const TrustStrip = () => {
  const features = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Best Quality Ingredients",
    },
    {
      icon: <FaLeaf />,
      title: "100% Fresh",
      desc: "Prepared Fresh Everyday",
    },
    {
      icon: <FaPepperHot />,
      title: "Authentic Taste",
      desc: "Traditional Recipes",
    },
    {
      icon: <FaSmile />,
      title: "Happy Customers",
      desc: "Trusted by Thousands",
    },
  ];

  return (
    <section className="bg-white border-y border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group hover:scale-105 transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition">
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TrustStrip;