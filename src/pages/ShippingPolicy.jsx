import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShippingPolicy = () => {
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
            Shipping Policy 🚚
          </h1>

          <p className="mt-6 text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Fresh namkeen delivered safely across India with trusted courier partners.
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
              About Our Shipping
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              At Gayatri Namkeen, we prepare fresh, preservative-free namkeen
              using Fortune Groundnut Oil and traditional recipes. Since our
              products are perishable and best consumed fresh, we ensure safe
              and reliable shipping across India.
            </p>

          </div>

          {/* Where We Ship */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              1. Where Do We Ship?
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🇮🇳 We currently ship to all states and cities across India.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🚫 International shipping is not available at this time.
              </div>

            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-5">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📦 India Post (Speed Post)
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📦 Delhivery
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📦 DTDC
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📦 XpressBees & other trusted courier services
              </div>

            </div>

          </div>

          {/* Delivery Time */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              2. Shipping & Delivery Time
            </h2>

            <div className="space-y-5">

              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[30px] p-8 text-white shadow-xl">

                <ul className="space-y-4 text-lg">

                  <li>🚚 Standard Delivery: 4–7 business days</li>

                  <li>⚡ Express Delivery (if available): 2–4 business days</li>

                  <li>🏡 Rural or remote locations may require extra delivery time</li>

                </ul>

              </div>

            </div>

            <div className="mt-6 text-gray-700 text-lg leading-relaxed">

              <p className="mb-3">
                Delivery timelines may vary due to:
              </p>

              <ul className="list-disc pl-6 space-y-2">

                <li>Courier delays</li>
                <li>Weather conditions</li>
                <li>Festivals or high-demand periods</li>
                <li>Incorrect address or contact details</li>

              </ul>

            </div>

          </div>

          {/* Shipping Charges */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              3. Shipping Charges
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                💰 Shipping charges are displayed during checkout.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🎉 Free shipping may be available on selected orders.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚖️ Charges vary based on weight, location, and courier rates.
              </div>

            </div>

          </div>

          {/* Order Tracking */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              4. Order Tracking
            </h2>

            <div className="space-y-5">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📲 Tracking ID will be shared via SMS, WhatsApp, or email.
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                🌐 You can track your shipment on the courier partner’s website.
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                📞 Contact us if tracking details are not received within 3 days.
              </div>

            </div>

          </div>

          {/* Minimum Order */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              5. Minimum Order for Shipping
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <ul className="space-y-4 text-gray-700 text-lg">

                <li>✅ Minimum order value: ₹300 (excluding shipping)</li>

                <li>🏪 Orders below ₹300 are available only for shop pickup</li>

                <li>
                  📦 This helps keep shipping cost-effective for small orders
                </li>

              </ul>

            </div>

          </div>

          {/* Incorrect Address */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              6. Incorrect or Incomplete Address
            </h2>

            <div className="space-y-5">

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                📍 Please provide complete address, PIN code, and active phone number.
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                🔁 Returned orders due to wrong address will require reshipping charges.
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ❌ No refund will be provided for incorrect address issues.
              </div>

            </div>

          </div>

          {/* Service Restrictions */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              7. Areas with Limited Shipping
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚠️ Very remote locations without courier service
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚠️ Some parts of Northeast India (depending on pincode)
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⚠️ Andaman & Nicobar and Lakshadweep may face long delays
              </div>

            </div>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              If your pincode is not serviceable, we will inform you within
              24 hours and provide a full refund.
            </p>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              8. Contact Us for Shipping Queries
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <div className="space-y-5 text-gray-700 text-lg">

                <p>
                  📍 Gayatri Namkeen, Main Road, Near Veda Hospital,
                  Nanakheda, Ujjain, MP - 456010
                </p>

                <p>
                  📞 +91 9407277299
                </p>

                <p>
                  📧 support@gayatrinamkeen.com
                </p>

                <p>
                  🕒 Business Hours: 9:00 AM – 1:00 PM |
                  4:00 PM – 8:00 PM (IST)
                </p>

                <p>
                  📦 For shipping-related complaints, contact us within
                  24 hours of delivery.
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

export default ShippingPolicy;