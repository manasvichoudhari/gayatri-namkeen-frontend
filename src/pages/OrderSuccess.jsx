import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaCheckCircle, FaBoxOpen } from "react-icons/fa";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state?.order;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden">
        
        {/* Background Decorative Blur */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>

        <div className="flex justify-center">
          <FaCheckCircle className="text-green-500 text-7xl animate-bounce" />
        </div>

        <h1 className="text-3xl font-bold mt-4 text-gray-800">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-500 mt-2">
          Thank you! Your order has been confirmed.
        </p>

        {/* Order Details Card */}
        <div className="mt-6 bg-orange-50 rounded-2xl p-5 text-left space-y-3 border border-orange-100">
          <div className="flex justify-between">
            <span className="text-gray-600">Order ID</span>
            <span className="font-semibold text-orange-600">
              {order?._id || "N/A"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className="font-semibold text-green-600">
              {order?.orderStatus || "PLACED"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Payment</span>
            <span className="font-semibold text-gray-700">
              {order?.paymentMethod || "COD"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Delivery</span>
            <span className="font-semibold text-gray-700">
              2-4 Days
            </span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2 text-orange-500">
          <FaBoxOpen />
          <span className="text-sm font-medium">
            Preparing your delicious snacks...
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={() => navigate("/orders")}
            className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Track Your Order
          </button>

          <button
            onClick={() => navigate("/menu")}
            className="w-full border border-orange-300 text-orange-600 py-3 rounded-full font-semibold hover:bg-orange-50 transition"
          >
            Continue Shopping
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-5">
          You will receive SMS & Email updates shortly.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;