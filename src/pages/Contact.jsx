import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#fffaf5] min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 py-16 px-5">

        <div className="max-w-5xl mx-auto text-center text-white">

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-sm md:text-base text-orange-100 max-w-2xl mx-auto">
            We’re always ready to help you with orders, queries, and support.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="py-14 px-5">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Section */}
          <div className="bg-white rounded-3xl shadow-sm border border-orange-100 p-7">

            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Get In Touch
            </h2>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-6">

              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Call Us
                </p>

                <a
                  href="tel:+919407277299"
                  className="text-lg font-medium text-gray-800 hover:text-orange-600 transition"
                >
                  +91 9407277299
                </a>

                <br />

                <a
                  href="tel:+919424104823"
                  className="text-lg font-medium text-gray-800 hover:text-orange-600 transition"
                >
                  +91 9424104823
                </a>

              </div>

            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 mb-6">

              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <FaWhatsapp />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  WhatsApp Support
                </p>

                <a
                  href="https://wa.me/919407277299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-800 hover:text-green-600 transition"
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

            {/* Address */}
            <div className="flex items-start gap-4 mb-6">

              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Shop Address
                </p>

                <p className="text-gray-800 leading-relaxed">
                  Gayatri Namkeen <br />
                  Anand Nagar Main Road, Near Veda Hospital,
                  Nanakheda, Ujjain, Madhya Pradesh - 456010
                </p>

              </div>

            </div>

            {/* Timing */}
            <div className="flex items-start gap-4">

              <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
                <FaClock />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Business Hours
                </p>

                <p className="text-gray-800">
                  Monday - Saturday
                </p>

                <p className="text-gray-600 text-sm">
                  9:00 AM – 1:00 PM <br />
                  4:00 PM – 8:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white rounded-3xl shadow-sm border border-orange-100 p-5">

            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
              Store Location
            </h2>

            <div className="rounded-2xl overflow-hidden border border-orange-100">

              <iframe
                title="Gayatri Namkeen Map"
                src="https://www.google.com/maps?q=gayatri+namkeen+ujjain&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                allowFullScreen
                className="border-0"
              ></iframe>

            </div>

            <a
              href="https://www.google.com/maps/place/gayatrI+NAMKEEN/data=!4m2!3m1!1s0x396375004012cb53:0xef6f24246fe9213b?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-orange-600 font-medium hover:text-orange-700 transition"
            >
              Open in Google Maps →
            </a>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default ContactUs;