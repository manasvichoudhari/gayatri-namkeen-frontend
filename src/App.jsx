import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// =========== user pages ===========
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundReturnPolicy";
import ReturnPolicy from "./pages/ShippingPolicy";
import TermsConditions from "./pages/TermsConditions";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import TrackOrder from "./pages/TrackOrder";
import OrderSuccess from "./pages/OrderSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


// =========== admin ===========
import AdminLogin from "./admin/Adminlogin";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import Product from "./admin/Product";
import AdminLayout from "./admin/layout/AdminLayout";
import AdminRoutes from "./routes/AdminRoutes";
import Users from "./admin/Users";
import Offers from "./admin/Offers";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <Routes>

        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<TrackOrder />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} /> 
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= ADMIN PROTECTED ROUTES ================= */}
        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <AdminLayout />
            </AdminRoutes>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Product />} />
          <Route path="users" element={<Users />} />
          <Route path="offers" element={<Offers />} />
          
        </Route>
        <Route
  path="*"
  element={
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-gray-600">Page Not Found</p>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-full"
      >
        Go Home
      </button>
    </div>
  }
/>

      </Routes>
    </>
  );
}

export default App;