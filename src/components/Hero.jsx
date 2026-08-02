import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  { id: 1, image: "/products/sev.jpg" },
  { id: 2, image: "/products/bhujia.jpg" },
  { id: 3, image: "/products/mixture.jpg" },
  { id: 4, image: "/products/chips.jpg" },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-orange-50 via-white to-yellow-50">

      {/* Background Blur */}
      <div className="absolute pointer-events-none w-64 h-64 lg:w-[500px] lg:h-[500px] bg-orange-200 rounded-full blur-[120px] opacity-30 top-0 left-0"></div>

      <div className="absolute pointer-events-none w-56 h-56 lg:w-[400px] lg:h-[400px] bg-yellow-200 rounded-full blur-[100px] opacity-30 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold text-sm sm:text-base">
            🌶️ Authentic Ujjain Taste
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-800">
            Fresh & Crispy
            <br />
            <span className="text-orange-600">
              Gayatri Namkeen
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600 max-w-md mx-auto lg:mx-0 lg:max-w-xl">
            Experience premium quality namkeen made with authentic recipes,
            fresh ingredients and traditional flavours that every family loves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition w-full sm:w-auto"
            >
              Shop Now
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-full font-semibold transition w-full sm:w-auto"
            >
              Explore More
            </button>

          </div>

          {/* Stats */}

          <div className="flex justify-center lg:justify-start gap-10 mt-10">

            <div>
              <h2 className="text-3xl font-bold text-orange-600">
                30+
              </h2>
              <p className="text-gray-500">
                Products
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-orange-600">
                100%
              </h2>
              <p className="text-gray-500">
                Fresh
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center items-center py-4 lg:py-0">

          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px]"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-full border-[8px] lg:border-[10px] border-white shadow-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Hero;