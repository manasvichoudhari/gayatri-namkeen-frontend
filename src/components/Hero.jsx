
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import banner1 from "../assets/images/main banner 1.png";
import banner2 from "../assets/images/banner 2.png";
import banner3 from "../assets/images/3.png";

const banners = [
  {
    id: 1,
    image: banner1,
  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3,
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-[#fff8ef]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={700}
        allowTouchMove={true}
        grabCursor={true}
        className="hero-swiper w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[550px]">

              {/* Banner Image */}
              <img
                src={banner.image}
                alt="Gayatri Namkeen"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* ONLY FIRST BANNER BUTTONS */}
              {banner.id === 1 && (
                <div
                  className="
                    absolute
                    left-[6%]
                    bottom-[12%]
                    z-20
                    flex
                    flex-col
                    items-start
                    gap-3
                    sm:gap-4
                  "
                >
                  {/* EXPLORE MORE */}
                  <button
                    onClick={() => navigate("/about")}
                    className="
                    bg-[#8B4513]
                    hover:bg-[#6F350F]
                    text-white
                      font-bold
                      text-xs
                      sm:text-sm
                      lg:text-base
                      px-5
                      sm:px-7
                      lg:px-10
                      py-2
                      sm:py-2.5
                      lg:py-3
                      rounded-full
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-105
                      active:scale-95
                      whitespace-nowrap
                    "
                  >
                    EXPLORE MORE
                  </button>

                  {/* SHOP NOW */}
                  <button
                    onClick={() => navigate("/menu")}
                    className="
  text-white
  bg-[#8B4513]
  font-bold
  rounded-full
  text-xs
  py-2
  px-5
  hover:bg-[#6F350F]
  sm:text-sm
  hover:scale-105
  lg:text-base
  tracking-[0.25em]
  
  drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
  transition
  uppercase
"
                  >
                    SHOP NOW
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
  );
};

export default Hero;
