import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  const menuStyle = (path) => ({
    display: "block",
    padding: "12px 15px",
    marginBottom: "8px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#fff",
    background: location.pathname === path ? "#2563eb" : "transparent",
    transition: "0.3s",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#111827",
          color: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Gaytri Namkeen
        </h2>

        <nav style={{ flex: 1 }}>
          <Link to="/admin/dashboard" style={menuStyle("/admin/dashboard")}>
            📊 Dashboard
          </Link>

          <Link to="/admin/products" style={menuStyle("/admin/products")}>
            📦 Products
          </Link>

          <Link to="/admin/orders" style={menuStyle("/admin/orders")}>
            🛒 Orders
          </Link>

          <Link to="/admin/users" style={menuStyle("/admin/users")}>
            👥 Users
          </Link>

          <Link to="/admin/offers" style={menuStyle("/admin/offers")}>
            🎁 Offers
          </Link>
        </nav>

        <button
          onClick={logoutHandler}
          style={{
            width: "100%",
            padding: "12px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🚪 Logout
        </button>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "#f3f4f6",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            background: "#fff",
            padding: "18px 30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          }}
        >
          <h2>Admin Dashboard</h2>

          <div style={{ textAlign: "right" }}>
            <h4 style={{ margin: 0 }}>Welcome Admin 👋</h4>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
        </div>

        {/* Page Content */}
        <div style={{ padding: "30px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;