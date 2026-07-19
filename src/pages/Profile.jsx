import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();

  // Safely parse user data to prevent app crashes if localStorage is corrupted
  let user = null;
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
    localStorage.removeItem("user"); // Clear corrupted data
  }

  // Protect Route
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="bg-[#fff8f1] min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Profile Card */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-orange-100">
            <div className="h-52 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 relative">
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                <div className="w-32 h-32 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white">
                  <FaUserCircle className="text-8xl text-orange-500" />
                </div>
              </div>
            </div>

            <div className="pt-24 pb-10 px-6 text-center">
              <h1 className="text-4xl font-bold text-gray-800">
                {user.name || "User"}
              </h1>

              <p className="text-gray-500 mt-3">
                Welcome to Gayatri Namkeen ❤️
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button
                  onClick={() => navigate("/menu")}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
                >
                  Explore Menu
                </button>

                <button
                  onClick={() => navigate("/orders")}
                  className="bg-orange-100 hover:bg-orange-200 text-orange-700 px-8 py-3 rounded-full font-semibold transition"
                >
                  My Orders
                </button>

                <button
                  onClick={handleLogout}
                  className="bg-red-100 hover:bg-red-200 text-red-600 px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            
            <div className="bg-white rounded-[30px] p-6 shadow-lg border border-orange-100">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
                <FaPhoneAlt />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-800">
                Mobile
              </h3>
              <p className="mt-2 text-gray-500">
                {user.phone || "Not Added"}
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-6 shadow-lg border border-orange-100">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
                <FaEnvelope />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-800">
                Email
              </h3>
              <p className="mt-2 text-gray-500 break-all">
                {user.email || "Not Added"}
              </p>
            </div>

            <div className="bg-white rounded-[30px] p-6 shadow-lg border border-orange-100">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-800">
                Address
              </h3>
              <p className="mt-2 text-gray-500">
                {user.address || "Not Added"}
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;