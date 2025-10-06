import React, { useEffect, useState } from "react";
import { getUsersAdmin } from "../services/api";

function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("bms_token");
      if (!token) {
        setErr("Not authenticated.");
        return;
      }
      try {
        const data = await getUsersAdmin(token);
        setUsers(data.users || []);
      } catch (e) {
        setErr(e.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="page-container">
      <h1>Admin Panel</h1>
      {err && <p style={{ color: "red" }}>{err}</p>}
      <div className="card">
        <h3>Users</h3>
        {users.length === 0 && <p>No users found.</p>}
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.email} — <b>{u.role}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;
