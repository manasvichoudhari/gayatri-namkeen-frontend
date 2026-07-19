import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy 🔒
          </h1>

          <p className="mt-6 text-lg md:text-xl text-orange-50 max-w-3xl mx-auto">
            Your privacy is important to us. This page explains how Gayatri
            Namkeen collects, uses, and protects your information.
          </p>

        </div>

      </section>

      {/* Policy Content */}
      <section className="py-20 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl border border-orange-100 p-8 md:p-14">

          {/* Last Updated */}
          <div className="mb-10 text-center">

            <p className="text-orange-600 font-semibold text-lg">
              Last Updated: May 2026
            </p>

          </div>

          {/* Introduction */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              At Gayatri Namkeen, we value your privacy. This Privacy Policy
              explains what information we collect when you visit our website,
              place an order, or contact us — and how we use, protect, and
              respect your information.
            </p>

          </div>

          {/* Information We Collect */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8">
              1. Information We Collect
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Personal Information
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Name, phone number, email address, and delivery address when
                  you place an order or contact us.
                </p>

              </div>

              <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Order Details
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Purchased items, order date/time, and any special
                  instructions or taste preferences.
                </p>

              </div>

              <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Usage Data
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Website pages visited and browsing activity through cookies
                  to improve user experience.
                </p>

              </div>

              <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">

                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Payment Security
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  We do not collect payment card details. Payments are securely
                  processed by trusted third-party gateways.
                </p>

              </div>

            </div>

          </div>

          {/* How We Use Information */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              2. How We Use Your Information
            </h2>

            <div className="space-y-5">

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ✅ Processing and delivering your namkeen orders
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ✅ Contacting you regarding order updates or delays
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ✅ Improving products and services based on customer preferences
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ✅ Sending updates or offers only if you opt-in
              </div>

              <div className="bg-white shadow-md rounded-2xl p-5 border border-orange-100">
                ❌ We never sell or share your personal data for marketing purposes
              </div>

            </div>

          </div>

          {/* Cookies */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              3. Cookies & Tracking
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <p className="text-gray-700 leading-relaxed text-lg">
                Our website may use basic cookies to remember your preferences
                like language or location. You can disable cookies from your
                browser settings, but some features may not work properly.
              </p>

            </div>

          </div>

          {/* Security */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              4. Data Security
            </h2>

            <div className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[30px] p-8 text-white shadow-xl">

              <ul className="space-y-4 text-lg">

                <li>✅ Your data is stored securely</li>

                <li>✅ Access is limited to authorized staff only</li>

                <li>✅ We regularly review security practices</li>

                <li>
                  ⚠️ No online transmission is completely secure. You share
                  information at your own risk.
                </li>

              </ul>

            </div>

          </div>

          {/* Third Party Services */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              5. Third-Party Services
            </h2>

            <div className="space-y-5">

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                💳 Payment gateways like Razorpay, PhonePe, Cashfree, or bank
                links may be used for secure payments.
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                🚚 Delivery partners may receive only required details like
                your name, address, and phone number for order delivery.
              </div>

            </div>

          </div>

          {/* Rights */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              6. Your Rights
            </h2>

            <div className="space-y-4">

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ✔️ Request access to your personal data
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ✔️ Request correction or deletion of your information
              </div>

              <div className="bg-white shadow-sm rounded-2xl p-5 border border-orange-100">
                ✔️ Opt out of promotional messages anytime
              </div>

            </div>

          </div>

          {/* Children */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              7. Children's Privacy
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our website is not intended for children under 13 years of age.
              We do not knowingly collect personal data from children.
            </p>

          </div>

          {/* Changes */}
          <div className="mb-14">

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              8. Changes to This Policy
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>

          </div>

          {/* Contact */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-5">
              9. Contact Us
            </h2>

            <div className="bg-orange-50 rounded-[30px] p-8 border border-orange-100">

              <div className="space-y-5 text-gray-700 text-lg">

                <p>
                  📍 Gayatri Namkeen, Main Road, Near Veda Hospital,
                  Nanakheda, Ujjain, Madhya Pradesh - 456010
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

        </div>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default PrivacyPolicy;