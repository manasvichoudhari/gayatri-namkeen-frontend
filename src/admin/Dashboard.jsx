import React, { useEffect, useState } from "react";
import API from "../api";
const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    monthlyRevenue: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
  });
  const [topProducts, setTopProducts] = useState([]);
  useEffect(() => {
    fetchDashboard();
    fetchTopProducts();
  }, []);

  // ____________________DASHBOARD DATA_____________________
  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await API.get("/admin/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.success) {
        setDashboard(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // _____________________TOP SELLING PRODUCTS_______________________
  const fetchTopProducts = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await API.get(
        "/admin/top-products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (data.success) {
        setTopProducts(data.topProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Admin Dashboard</h1>
      {/* ____________________STATS CARDS____________________  */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Total Products</h3>
          <p>{dashboard.totalProducts}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Total Orders</h3>
          <p>{dashboard.totalOrders}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Total Revenue</h3>
          <p>₹ {dashboard.totalRevenue}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Monthly Revenue</h3>
          <p>₹ {dashboard.monthlyRevenue}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Pending Orders</h3>
          <p>{dashboard.pendingOrders}</p>
        </div>
        <div style={{ padding: "20px", background: "#eee", width: "220px" }}>
          <h3>Delivered Orders</h3>
          <p>{dashboard.deliveredOrders}</p>
        </div>
      </div>

      {/*____________________ TOP SELLING PRODUCTS _________________________*/}
      <div style={{ marginTop: "40px" }}>
        <h2>🔥 Top Selling Products</h2>
        <div style={{ marginTop: "20px" }}>
          {topProducts.length === 0 ? (
            <p>No data available</p>
          ) : (
            topProducts.map((p, index) => (
              <div
                key={index}
                style={{
                  padding: "10px",
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <h4>{p.name}</h4>
                <p>Sold: {p.totalSold}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;