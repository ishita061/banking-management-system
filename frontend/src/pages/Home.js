import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1 className="home-title">Welcome to Our Bank</h1>
        <p className="home-subtitle">
          A trusted partner for all your financial needs. From savings to loans, 
          we provide secure and reliable banking services designed to help you grow.
        </p>
        <button className="btn-primary">
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Get Started
          </Link>
        </button>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At <strong>[Bank Name]</strong>, we believe in making banking simple, 
          transparent, and accessible. With decades of trust, we provide services 
          ranging from savings accounts, fixed deposits, and loans to modern 
          internet banking facilities. Our mission is to empower you with the 
          tools to achieve financial freedom securely.
        </p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>🏦 Secure Savings</h3>
            <p>Open savings accounts with attractive interest rates and benefits.</p>
          </div>
          <div className="service-card">
            <h3>💳 Internet Banking</h3>
            <p>Manage your money online anytime, anywhere with secure access.</p>
          </div>
          <div className="service-card">
            <h3>📊 Fixed Deposits</h3>
            <p>Grow your wealth with reliable fixed deposit options.</p>
          </div>
          <div className="service-card">
            <h3>👨‍💻 Admin Support</h3>
            <p>Dedicated support for admin users to monitor activities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
