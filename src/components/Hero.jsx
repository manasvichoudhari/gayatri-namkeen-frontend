
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
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
    <section className="relative w-full overflow-hidden">

      {/* =========================
          BACKGROUND IMAGE CAROUSEL
      ========================= */}

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        allowTouchMove={true}
        grabCursor={true}
        className="hero-swiper w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="
                relative
                w-full
                aspect-[16/7]
                min-h-[260px]
                sm:min-h-[320px]
                md:min-h-[400px]
                lg:min-h-[500px]
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage: `url("${banner.image}")`,
                backgroundSize: "100% 100%",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =========================
          HERO BUTTONS
          ALWAYS VISIBLE
      ========================= */}

      <div
        className="
          absolute
          left-[7%]
          bottom-[7%]
          z-20
          flex
          items-center
          gap-3
          sm:gap-4
        "
      >

        {/* SHOP NOW */}
        <button
          onClick={() => navigate("/menu")}
          className="
            px-5
            sm:px-7
            lg:px-9
            py-2.5
            sm:py-3
            rounded-full
            bg-[#F5C451]
            text-[#5B2B12]
            font-semibold
            text-xs
            sm:text-sm
            lg:text-base
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#FFD66B]
            hover:-translate-y-1
            hover:shadow-xl
            active:scale-95
            whitespace-nowrap
          "
        >
          SHOP NOW
        </button>

        {/* EXPLORE MORE */}
        <button
          onClick={() => navigate("/about")}
          className="
            px-5
            sm:px-7
            lg:px-9
            py-2.5
            sm:py-3
            rounded-full
            bg-[#7A3E16]
            text-white
            font-semibold
            text-xs
            sm:text-sm
            lg:text-base
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#5F2F10]
            hover:-translate-y-1
            hover:shadow-xl
            active:scale-95
            whitespace-nowrap
          "
        >
          EXPLORE MORE
        </button>

      </div>

      {/* =========================
          PAGINATION
      ========================= */}

      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 12px !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: white;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 22px;
          border-radius: 20px;
          background: #F5C451;
          opacity: 1;
        }

        @media (max-width: 640px) {
          .hero-swiper .swiper-pagination {
            bottom: 6px !important;
          }

          .hero-swiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }

          .hero-swiper .swiper-pagination-bullet-active {
            width: 18px;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;
