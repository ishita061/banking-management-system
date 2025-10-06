import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{ margin: 0 }}>🏦 Bank Management System</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { background: "#002171", color: "white", padding: "12px 20px", display: "flex", justifyContent: "space-between" },
  link: { marginLeft: "15px", color: "white", textDecoration: "none" }
};
