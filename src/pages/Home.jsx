import React, { useEffect, useState } from "react";
import API from "../api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LovedSlider from "../components/Lovedslider";
import Footer from "../components/Footer";


const Home = () => {
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchOffer = async () => {
      try {
        const res = await API.get("/offers");

        console.log("Response:", res.data);

        if (isMounted && res.data.success) {
          const activeOffer = res.data.offers.find(
            (o) => o.isActive === true
          );

          console.log("Active Offer:", activeOffer);

          setOffer(activeOffer || null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchOffer();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="bg-[#fff7ed] overflow-hidden">

      {/*  OFFER BANNER */}
      {!loading && offer && (
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-4 font-semibold flex justify-center items-center gap-3">

          <span>
            🎉 {offer.title} - {offer.description}
          </span>

        </div>
      )}
    
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <LovedSlider />
      <section className="py-24 bg-gradient-to-b from-[#fff8f1] to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-16">

            <p className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-gray-800 mt-3">
              Why Choose Gayatri Namkeen?
            </h2>

            <p className="text-gray-500 mt-5 max-w-2xl mx-auto text-lg">
              We prepare every product with authentic recipes, premium ingredients
              and unmatched quality to deliver the real taste of Ujjain.
            </p>

          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center border border-orange-100">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl">
                🌾
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                Premium Ingredients
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Carefully selected quality ingredients for rich taste and freshness.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center border border-orange-100">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl">
                👨‍🍳
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                Freshly Prepared
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Every batch is freshly prepared to ensure crispness and authentic flavour.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center border border-orange-100">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl">
                ❤️
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                Authentic Taste
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Traditional recipes that bring the original Ujjain namkeen experience.
              </p>

            </div>

            {/* Card 4 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center border border-orange-100">

              <div className="w-20 h-20 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-5xl">
                🏆
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                Trusted Quality
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Loved by families for delicious taste, hygiene and consistent quality.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;