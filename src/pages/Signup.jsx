import React, { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await API.post("/auth/register", formData);

      if (!res.data || !res.data.success) {
        toast.error(res.data?.message || "Registration Failed");
        return;
      }

      // Save Token
      localStorage.setItem("token", res.data.token);

      // Save Clean User Data (Handles both flat data or nested data structures safely)
      const returnedUser = res.data.user || res.data;
      const userData = {
        _id: returnedUser._id,
        name: returnedUser.name,
        email: returnedUser.email,
        phone: returnedUser.phone,
        role: returnedUser.role || "user",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Account Created Successfully 🎉");
      navigate("/profile");

    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Unable to connect to server"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-[35px] shadow-2xl p-8">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600">
            Create Account
          </h1>
          <p className="text-gray-500 mt-3">
            Join Gayatri Namkeen Family ❤️
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          {/* Full Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            maxLength={10}
            pattern="[0-9]{10}"
            inputMode="numeric"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Password */}
          <input
            type="password"
            minLength={6}
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
          
          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;