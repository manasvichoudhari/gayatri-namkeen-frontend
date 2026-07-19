import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import toast from "react-hot-toast";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }
    try {
      setLoading(true);
      const res = await API.post("/admin/login",
        {
          email,
          password,
        }
      );
      const token = res.data?.token;
      if (!token) {
        return toast.error("Token missing");
      }
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          role: "admin",
        })
      );
      toast.success("Login Successful 🎉");
      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message ||
        "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">
        {/*_____________________ ICON____________________ */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck
              size={40}
              className="text-orange-500"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Login
          </h1>
          <p className="text-gray-500 mt-2">
            Login to manage orders, products and users
          </p>
        </div>
        {/* ____________________EMAIL_______________________ */}
        <div className="mt-8">
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/*_________________________ PASSWORD_________________ */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 pr-12"
            />
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>
        {/*____________________ BUTTON ____________________*/}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`w-full mt-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 ${loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600"
            }`}
        >
          {loading ? "Logging In..." : "Login"}
        </button>
        <p className="text-center text-xs text-gray-400 mt-6">
          Gayatri Namkeen Admin Panel
        </p>
      </div>
    </div>
  );
};
export default AdminLogin;