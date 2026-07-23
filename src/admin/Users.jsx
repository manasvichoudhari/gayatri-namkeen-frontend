import React, { useEffect, useState } from "react";
import API from "../api";
import toast from "react-hot-toast";

const Users = () => {
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    try {
      const { data } = await API.get("/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setUsers(data.users);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Failed to load users"
      );
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, []);

  // BLOCK / UNBLOCK
  const toggleBlock = async (id) => {
    try {
      await API.put(
        `/admin/users/${id}/block`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Action failed"
      );
    }
  };

  // DELETE
  const deleteUser = async (id) => {
    try {
      await API.delete(`/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Delete failed"
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>👤 Users Management</h2>

      {users.length === 0 ? (
        <p>No Users Found</p>
      ) : (
        users.map((u) => (
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
              Status{" "}
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
        ))
      )}
    </div>
  );
};

export default Users;