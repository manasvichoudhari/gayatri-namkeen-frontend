import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getToken = () => localStorage.getItem("token");

  // GET ALL ORDERS (ADMIN)
  const fetchOrders = async () => {
    try {
      const res = await API.get(
        "/admin/orders",
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      setOrders(res.data || []);
    } catch (err) {
      console.log("Error fetching orders:", err);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  // UPDATE STATUS
  const updateStatus = async (id, status) => {
    try {
      await API.put(
        `/admin/orders/${id}`,
        { orderStatus: status },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      fetchOrders();
    } catch (err) {
      console.log("Update error:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Admin Orders Panel</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h4>Order ID: {order._id}</h4>
            <p>💰 Total: ₹{order.totalAmount}</p>
            <p>📍 Status: {order.orderStatus}</p>
            <p>
              💳 Payment Method:
              <b> {order.paymentMethod}</b>
            </p>

            <p>
              💵 Payment Status:
              <span
                style={{
                  color:
                    order.paymentStatus === "PAID"
                      ? "green"
                      : order.paymentStatus === "PENDING"
                        ? "orange"
                        : "red",
                  fontWeight: "bold",
                }}
              >
                {order.paymentStatus}
              </span>
            </p>

            {order.paymentId && (
              <p>
                🆔 Payment ID: {order.paymentId}
              </p>
            )}
            <select
              value={order.orderStatus}
              onChange={(e) =>
                updateStatus(order._id, e.target.value)
              }
            >
              <option value="PLACED">PLACED</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="PACKED">PACKED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
            </select>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;