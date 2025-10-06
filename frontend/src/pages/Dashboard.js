import React from "react";
import "../style.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="hero-section">
        <h1 className="hero-title">💰 Bank Management System</h1>
        <p className="hero-subtitle">
          Welcome to [Bank Name], where we help you manage your savings, accounts, and transactions effectively. Start your journey with us and grow your savings securely.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h2>🏦 Secure Banking</h2>
          <p>Your data is encrypted and safe with us.</p>
        </div>
        <div className="feature-card">
          <h2>📊 Track Transactions</h2>
          <p>View and manage your transaction history.</p>
        </div>
        <div className="feature-card">
          <h2>👨‍💻 Admin Panel</h2>
          <p>Admins can monitor and manage all activities.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
