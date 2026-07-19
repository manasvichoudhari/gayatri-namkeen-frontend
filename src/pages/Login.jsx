import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../api";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", formData);

      console.log("Login Response:", res.data);

      if (!res.data.success) {
        toast.error(res.data.message || "Login Failed");
        return;
      }

      localStorage.setItem("token", res.data.token);

      const userData = {
        _id: res.data._id,
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        role: res.data.role || "user",
      };

      localStorage.setItem("user", JSON.stringify(userData));

      toast.success("Login Successful ✅");

       if (userData.role === "admin") {
        navigate("/admin/dashboard");
            } else {
              navigate("/profile");
}
    } catch (error) {
      console.log("Login Error:", error);
      console.log("Response:", error.response);
      console.log("Request:", error.request);
      console.log("Message:", error.message);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-50 px-4">
      <div className="bg-white p-8 md:p-10 rounded-[35px] shadow-2xl w-full max-w-md border border-orange-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-600">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-3">
            Login to continue your crispy journey
          </p>
        </div>

        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400 mb-5"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          className="w-full border border-orange-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-orange-400 mb-5"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full py-3 rounded-full font-semibold text-white transition shadow-lg ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link
          to="/forgot-password"
          className="block mt-3 text-orange-600 text-sm hover:underline"
        >
          Forgot Password?
        </Link>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-200"></div>

          <p className="text-sm text-gray-400">OR</p>

          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;