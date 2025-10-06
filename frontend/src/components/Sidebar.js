import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
      >
        Dashboard
      </NavLink>

      <NavLink 
        to="/accounts" 
        className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
      >
        Accounts
      </NavLink>

      <NavLink 
        to="/transactions" 
        className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
      >
        Transactions
      </NavLink>

      <NavLink 
        to="/admin" 
        className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
      >
        Admin Panel
      </NavLink>
    </div>
  );
}

export default Sidebar;
