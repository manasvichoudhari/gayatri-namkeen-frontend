import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Mail } from "lucide-react";
import API from "../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      return toast.error("Please enter your email");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return toast.error("Enter a valid email address");
    }

    try {
      setLoading(true);

      const res = await API.post(
        "/auth/forgot-password",
        { email }
      );

      toast.success(
        res.data.message || "Reset password link sent successfully"
      );

      setEmail("");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("RESPONSE:", error.response);
      console.log("MESSAGE:", error.message);

      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <Mail size={36} className="text-orange-500" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Forgot Password
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your registered email and we'll send you a reset link.
          </p>
        </div>

        <div className="mt-8">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
              }`}
          >
            {loading ? "Sending Link..." : "Send Reset Link"}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Remember your password?
          <Link
            to="/login"
            className="text-orange-500 font-semibold ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;