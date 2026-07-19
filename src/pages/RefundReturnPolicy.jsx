import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RefundReturnPolicy = () => {
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
            Refund & Return Policy 🔄
          </h1>

          <p className="mt-6 text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Customer satisfaction is our priority. Please read our refund and
            return policy carefully before placing your order.
          </p>

        </div>

      </section>

      {/* Main Content */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 p-8 md:p-14">

          {/* Last Updated */}
          <div className="mb-10 text-center">

            <p className="text-orange-600 font-semibold text-lg">
              Last Updated: May 2026
            </p>

          </div>

          {/* Intro */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              1. Important Note – Perishable Product
            </h2>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[30px] p-8 text-white shadow-xl">

              <p className="leading-relaxed text-lg">
                Our namkeen is freshly prepared using Fortune Groundnut Oil and
                contains no preservatives. Due to hygiene and food safety
                reasons, refunds and returns are only accepted for genuine
                issues from our side.
              </p>

            </div>

          </div>

          {/* Eligible Refund */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              2. When Will You Get a Refund or Return?
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ Wrong item delivered
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ Stale, spoiled, or bad-smelling product
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ Contaminated product (hair, plastic, stone, etc.)
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ Complete non-delivery of order
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ Order cancelled by us due to stock or pricing issue
              </div>

            </div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              In all the above cases, you may receive either a full refund or a
              replacement depending on product availability.
            </p>

          </div>

          {/* No Refund */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              3. When Will You NOT Get a Refund or Return?
            </h2>

            <div className="space-y-5">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ You did not like the taste
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Change of mind after placing order
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Wrong or incomplete address provided
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Customer unavailable during delivery
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Complaint raised after 2 hours of delivery
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Product already partially consumed
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ Custom taste orders prepared exactly as requested
              </div>

            </div>

          </div>

          {/* Partial Refund */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              4. Partial Refund or Return
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚠️ Missing or incorrect item → Refund only for that item
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚠️ Damaged packets → Refund only for damaged packets
              </div>

            </div>

          </div>

          {/* Governing Law */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              5. Governing Law
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              This Refund & Return Policy is governed by the laws of India.
              Any disputes shall fall under the jurisdiction of Ujjain,
              Madhya Pradesh courts.
            </p>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              6. Contact Us for Refund & Return Requests
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <div className="space-y-5 text-gray-700 text-lg">

                <p>
                  📍 Gayatri Namkeen, Anand Nagar Main Road,
                  Near Veda Hospital, Nanakheda,
                  Ujjain, Madhya Pradesh - 456010
                </p>

                <p>
                  📞 +91 9407277299
                </p>

                <p>
                  📧 support@gayatrinamkeen.com
                </p>

                <p>
                  📸 Please keep your order details and product photos ready
                  before contacting us.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default RefundReturnPolicy;