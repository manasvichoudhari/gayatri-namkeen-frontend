import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  {
    id: 1,
    image: "/products/sev.jpg",
  },
  {
    id: 2,
    image: "/products/bhujia.jpg",
  },
  {
    id: 3,
    image: "/products/mixture.jpg",
  },
  {
    id: 4,
    image: "/products/chips.jpg",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative  bg-gradient-to-r from-orange-50 via-white to-yellow-50">

      {/* Blur Background */}

      <div className="absolute pointer-events-none w-[500px] h-[500px] bg-orange-200 rounded-full blur-[150px] opacity-30 top-0 left-0"></div>

      <div className="absolute pointer-events-none w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[120px] opacity-30 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}

        <div>

          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">
            🌶️ Authentic Ujjain Taste
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-800">
            Fresh & Crispy
            <br />
            <span className="text-orange-600">
              Gayatri Namkeen
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
            Experience premium quality namkeen made with authentic
            recipes, fresh ingredients and traditional flavours that
            every family loves.
          </p>

          <div className="flex gap-5 mt-10">

            <button
              onClick={() => {
                alert("clicked");
                navigate("/menu");
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
            >
              Shop Now
            </button>

            <button
              onClick={() => {
                alert("clicked");
                navigate("/about");
              }}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition"
            >
              Explore More
            </button>

          </div>

          {/* Stats */}

          <div className="flex gap-10 mt-14">

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

        <div className="relative flex justify-center">

          <div className="absolute w-[430px] h-[430px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full max-w-[500px]"
          >

            {products.map((item) => (

              <SwiperSlide key={item.id}>

                <div className="flex justify-center">

                  <img
                    src={item.image}
                    alt=""
                    className="w-[420px] h-[420px] object-cover rounded-full border-[10px] border-white shadow-2xl"
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