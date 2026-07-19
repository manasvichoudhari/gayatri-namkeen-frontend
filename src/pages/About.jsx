import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#fff8f1] min-h-screen overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 py-24 px-6 overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-100/20 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            About Us 🌟
          </h1>

          <p className="mt-6 text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Taste the tradition. Feel the difference.
          </p>

        </div>

      </section>

      {/* Main Section */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Intro Card */}
          <div className="bg-white rounded-[40px] shadow-2xl border border-orange-100 p-8 md:p-14">

            <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-8">
              Welcome to Gayatri Namkeen ❤️
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Welcome to Gayatri Namkeen – a fresh beginning in the world of authentic Indian snacks.
              We started our journey in February 2025 with a simple but strong belief:
              good snacks should be tasty, pure, and healthy.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Although we are new, our passion for quality is deep.
              Our entire range of namkeen is prepared using
              <span className="font-semibold text-orange-600">
                {" "}Fortune Groundnut Oil
              </span>,
              which gives a clean and light taste without compromising on crunch or flavour.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We take pride in offering
              <span className="font-semibold text-orange-600">
                {" "}Zero Preservatives
              </span>
              — just 100% real, traditional taste made the way it should be.
            </p>

          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-[35px] shadow-xl border border-orange-100 p-8 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-5">🥜</div>

              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Premium Oil
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every namkeen is prepared using high-quality Fortune Groundnut Oil for better taste and freshness.
              </p>

            </div>

            <div className="bg-white rounded-[35px] shadow-xl border border-orange-100 p-8 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-5">✨</div>

              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Zero Preservatives
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We believe in serving fresh and hygienic snacks without harmful preservatives.
              </p>

            </div>

            <div className="bg-white rounded-[35px] shadow-xl border border-orange-100 p-8 hover:-translate-y-2 transition duration-500">

              <div className="text-5xl mb-5">😋</div>

              <h3 className="text-2xl font-bold text-orange-600 mb-4">
                Customized Taste
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Every customer has a unique taste. We customise flavours according to your preference.
              </p>

            </div>

          </div>

          {/* Why People Love Us */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[40px] p-10 md:p-14 shadow-2xl text-white">

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why People Keep Coming Back ❤️
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Once someone tastes our namkeen, they never really leave.
              Our biggest strength is our customer trust — earned by serving consistently fresh,
              flavourful, and hygienic snacks.
            </p>

            <p className="text-lg leading-relaxed">
              Gayatri Namkeen is not just a shop — it’s a promise of pure taste,
              honest ingredients, and a smile with every bite.
            </p>

          </div>

          {/* Address */}
          <div className="mt-16 bg-white rounded-[40px] shadow-2xl border border-orange-100 p-8 md:p-14">

            <h2 className="text-4xl font-bold text-orange-600 mb-8">
              📍 Find Us
            </h2>
            <iframe
              title="Gayatri Namkeen Location"
              src="https://www.google.com/maps?q=gayatri+namkeen+ujjain&output=embed"
              width="50%"
              height="40"
              loading="lazy"
              allowFullScreen
              className="w-full border-0"
            ></iframe>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <p className="text-lg text-gray-700 leading-relaxed">
                Gayatri Namkeen <br />
                Anand Nagar Main Road, Near Veda Hospital,
                Nanakheda <br />
                Ujjain, Madhya Pradesh – 456010
              </p>

            </div>

          </div>

          {/* Final Quote */}
          <div className="mt-16 text-center">

            <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 leading-tight">
              Welcome to Our Family ❤️
            </h2>

            <p className="mt-6 text-2xl text-gray-700 font-medium">
              Taste the tradition. Feel the difference.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default About;