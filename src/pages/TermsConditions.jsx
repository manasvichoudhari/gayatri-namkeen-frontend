import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditions = () => {
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
            Terms & Conditions 📜
          </h1>

          <p className="mt-6 text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Please read these terms carefully before using our website or placing an order with Gayatri Namkeen.
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

          {/* General Info */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              1. General Information
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">

              <p>
                <span className="font-semibold">Shop Name:</span> Gayatri Namkeen
              </p>

              <p>
                <span className="font-semibold">Location:</span> Anand Nagar Main Road,
                Near Veda Hospital, Nanakheda, Ujjain, Madhya Pradesh - 456010
              </p>

              <p>
                <span className="font-semibold">Business Type:</span> Traditional
                namkeen & snacks shop (takeaway, delivery, and online orders)
              </p>

              <p>
                We reserve the right to update these terms at any time without prior notice.
              </p>

            </div>

          </div>

          {/* Orders */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              2. Orders & Acceptance
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ All orders are subject to acceptance and product availability.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ✅ We may contact you to confirm taste preference or delivery details.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ❌ Orders may be cancelled if product is unavailable, pricing is incorrect,
                or delivery area is unsupported.
              </div>

            </div>

          </div>

          {/* Pricing */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              3. Pricing & Payment
            </h2>

            <div className="space-y-5">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                💰 All prices are in Indian Rupees (INR).
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                💳 Payments accepted via UPI, cards, net banking, and Cash on Delivery (if available).
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                🔒 We do not store your payment card details.
              </div>

            </div>

          </div>

          {/* Delivery */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              4. Delivery & Pickup
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🚚 Delivery currently available in Nanakheda, Ujjain, and nearby areas.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ⏰ Delivery delays may happen due to traffic, weather, or high order volume.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🛍️ Self pickup is always available from our shop.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ❌ We are not responsible for delays caused by incorrect address or external conditions.
              </div>

            </div>

          </div>

          {/* Taste & Quality */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              5. Taste & Quality
            </h2>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[30px] p-8 text-white shadow-xl">

              <ul className="space-y-4 text-lg">

                <li>
                  ✅ Our namkeen is made fresh using Fortune Groundnut Oil and traditional recipes.
                </li>

                <li>
                  ❌ Refunds are not provided simply because a customer did not like the taste.
                </li>

                <li>
                  ✅ Genuine quality issues like stale or spoiled products will be resolved immediately.
                </li>

              </ul>

            </div>

          </div>

          {/* Refund Policy */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              6. Cancellation & Refund Policy
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full border-collapse rounded-2xl overflow-hidden">

                <thead>

                  <tr className="bg-orange-500 text-white">

                    <th className="p-4 text-left">Situation</th>
                    <th className="p-4 text-left">Policy</th>

                  </tr>

                </thead>

                <tbody className="bg-orange-50 text-gray-700">

                  <tr className="border-b border-orange-100">
                    <td className="p-4">Order cancelled before preparation</td>
                    <td className="p-4">Full refund or credit</td>
                  </tr>

                  <tr className="border-b border-orange-100">
                    <td className="p-4">Order cancelled after preparation</td>
                    <td className="p-4">No refund</td>
                  </tr>

                  <tr className="border-b border-orange-100">
                    <td className="p-4">Wrong item delivered</td>
                    <td className="p-4">Replacement or refund</td>
                  </tr>

                  <tr className="border-b border-orange-100">
                    <td className="p-4">Quality issue</td>
                    <td className="p-4">Full refund or replacement</td>
                  </tr>

                  <tr>
                    <td className="p-4">Customer unavailable at address</td>
                    <td className="p-4">No refund</td>
                  </tr>

                </tbody>

              </table>

            </div>

            <p className="mt-5 text-gray-600 text-lg">
              Refunds are processed within 7–10 business days through the original payment method.
            </p>

          </div>

          {/* Custom Taste */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              7. Custom Taste Requests
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              We customize taste according to customer preference such as extra spicy,
              less salt, etc. Please mention your preference clearly while ordering.
              Once prepared, taste cannot be modified.
            </p>

          </div>

          {/* Liability */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              8. Limitation of Liability
            </h2>

            <div className="space-y-4">

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ✔️ Our liability is limited to the amount paid for the order.
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ✔️ We are not responsible for indirect damages or inconvenience.
              </div>

            </div>

          </div>

          {/* Prohibited */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              9. Prohibited Conduct
            </h2>

            <div className="space-y-4">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ❌ Using the website for illegal purposes
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ❌ Harassing staff or delivery partners
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                ❌ False claims or payment fraud
              </div>

            </div>

          </div>

          {/* Contact */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              10. Contact Us
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <div className="space-y-5 text-gray-700 text-lg">

                <p>
                  📍 Anand Nagar Main Road, Near Veda Hospital,
                  Nanakheda, Ujjain, MP - 456010
                </p>

                <p>
                  📞 +91 9407277299
                </p>

                <p>
                  📧 support@gayatrinamkeen.com
                </p>

              </div>

            </div>

          </div>

          {/* Governing Law */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              11. Governing Law
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              These Terms & Conditions are governed by the laws of India.
              Any disputes shall be subject to the jurisdiction of courts
              in Ujjain, Madhya Pradesh.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default TermsConditions;