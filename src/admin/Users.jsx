import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/users", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🚫 BLOCK / UNBLOCK
  const toggleBlock = async (id) => {
    await API.put(
      `/admin/users/${id}/block`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    fetchUsers();
  };

  // 🗑 DELETE
  const deleteUser = async (id) => {
    await API.delete(`/admin/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchUsers();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Users Management</h2>

      {users.map((u) => (
        <div
          key={u._id}
          style={{
            padding: "15px",
            margin: "10px 0",
            background: u.isBlocked ? "#ffe5e5" : "#fff",
            border: "1px solid #ddd",
          }}
        >
          <h4>{u.name}</h4>
          <p>{u.email}</p>

          <p>
            Status:{" "}
            <b style={{ color: u.isBlocked ? "red" : "green" }}>
              {u.isBlocked ? "Blocked" : "Active"}
            </b>
          </p>

          <button onClick={() => toggleBlock(u._id)}>
            {u.isBlocked ? "Unblock" : "Block"}
          </button>

          <button
            onClick={() => deleteUser(u._id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;