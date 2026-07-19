import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const [editId, setEditId] = useState(null);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (editId) {
      await API.put(`/products/${editId}`, form);
    } else {
      await API.post("/products", form);
    }

    setForm({ name: "", price: "", description: "", image: "" });
    setEditId(null);
    fetchProducts();
  };

  const handleDelete = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  const handleEdit = (p) => {
    setForm(p);
    setEditId(p._id);
  };

  return (
    <div style={{ padding: "30px", background: "#f4f6f8", minHeight: "100vh" }}>

      {/* HEADER */}
      <h2 style={{ marginBottom: "20px", color: "#111827" }}>
        📦 Product Management
      </h2>

      {/* FORM CARD */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        marginBottom: "30px"
      }}>
        <h3 style={{ marginBottom: "15px" }}>
          {editId ? "Update Product" : "Add New Product"}
        </h3>

        <div style={{ display: "grid", gap: "10px" }}>
          <input
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
          />

          <input
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            style={inputStyle}
          />

          <input
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            style={inputStyle}
          />

          <input
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            style={inputStyle}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: "10px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {editId ? "Update Product" : "Add Product"}
          </button>
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div style={{ display: "grid", gap: "15px" }}>
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              background: "#fff",
              padding: "15px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <img
                src={p.image}
                alt="product"
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

              <div>
                <h4 style={{ margin: 0 }}>{p.name}</h4>
                <p style={{ margin: "4px 0", color: "#555" }}>
                  ₹ {p.price}
                </p>
                <small style={{ color: "#777" }}>{p.description}</small>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => handleEdit(p)}
                style={btnEdit}
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(p._id)}
                style={btnDelete}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none"
};

const btnEdit = {
  padding: "8px 12px",
  background: "#f59e0b",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

const btnDelete = {
  padding: "8px 12px",
  background: "#ef4444",
  border: "none",
  borderRadius: "6px",
  color: "#fff",
  cursor: "pointer"
};

export default Product;