import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (

    <footer className="bg-[#1f1a17] text-white pt-20 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Logo + About */}

        <div>

          <h2 className="text-4xl font-bold text-orange-500">
            Gayatri Namkeen
          </h2>

          <p className="mt-5 text-gray-300 leading-relaxed text-sm">

            Fresh & crispy traditional namkeen made in pure homemade groundnut oil with authentic taste and premium quality.

          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-6">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 p-3 rounded-full hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 p-3 rounded-full hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://wa.me/919407277299"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 p-3 rounded-full hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Pages */}

        <div>

          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Pages
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li
              onClick={() => navigate("/")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Home
            </li>

            <li
              onClick={() => navigate("/menu")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Menu
            </li>

            <li
              onClick={() => navigate("/contact")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Contact
            </li>

            <li
              onClick={() =>
                window.open(
                  "https://wa.me/919407277299",
                  "_blank"
                )
              }
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Chat Support
            </li>

          </ul>

        </div>

        {/* Policies */}

        <div>

          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Policies
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li
              onClick={() => navigate("/refund-policy")}
              className="hover:text-orange-400 transition cursor-pointer">
              Refund & Return Policy
            </li>

            <li
              onClick={() => navigate("/return-policy")}
              className="hover:text-orange-400 transition cursor-pointer">
              Shipping Policy
            </li>

            <li
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-orange-400 transition cursor-pointer">
              Privacy Policy
            </li>

            <li
              onClick={() => navigate("/terms-conditions")}
              className="hover:text-orange-400 transition cursor-pointer">
              Terms & Conditions
            </li>

          </ul>

        </div>

        {/* Top Categories */}

        <div>

          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Top Categories
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li
              onClick={() => navigate("/menu?item=Ujjaini Sev")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Ujjaini Sev
            </li>

            <li
              onClick={() => navigate("/menu?item=Ratlami Sev")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Ratlami Sev
            </li>

            <li
              onClick={() => navigate("/menu?item=Khatta Mitha Mixture")}
              className="hover:text-orange-400 transition cursor-pointer"
            >
              Khatta Mitha Mix
            </li>
          </ul>

        </div>

        {/* Shop Info */}

        {/* Shop Info */}

        <div>

          <h3 className="text-2xl font-semibold mb-6 text-orange-400">
            Shop Location
          </h3>

          <div className="space-y-5 text-gray-300 text-sm">

            {/* Location */}

            <a
              href="https://www.google.com/maps/place/gayatrI+NAMKEEN/data=!4m2!3m1!1s0x396375004012cb53:0xef6f24246fe9213b?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-orange-400 transition"
            >

              <FaMapMarkerAlt className="text-orange-500 mt-1" />

              <p>
                Gayatri Namkeen, Anand Nagar Main Road,
                Nanakheda, Ujjain, Madhya Pradesh - 456010
              </p>

            </a>

            {/* Phone */}

            <a
              href="tel:9407277299"
              className="flex items-center gap-3 hover:text-orange-400 transition"
            >

              <FaPhoneAlt className="text-orange-500" />

              <p>9407277299</p>

            </a>

            {/* Email */}

            <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=gayatrinamkeen@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 hover:text-orange-400 transition"
>
  <FaEnvelope className="text-orange-500" />
  <p>gayatrinamkeen@gmail.com</p>
</a>

          </div>

        </div>
      </div>



      {/* Bottom */}

      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-gray-400 text-sm">

        © 2026 Gayatri Namkeen.

      </div>

    </footer>
  );
};

export default Footer;