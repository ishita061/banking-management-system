import React, { useEffect, useState } from "react";
import "./Accounts.css";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const token = localStorage.getItem("bms_token","dummy_token");
    if (!token) {
      setError("Not authenticated. Please login.");
      return;
    }

    const dummyAccounts = [
      {
        id: 1,
        holder: "Ishi Sharma",
        number: "1234567890",
        type: "Savings",
        balance: 54000,
        status: "Active",
      },
      {
        id: 2,
        holder: "Ishi Sharma",
        number: "9876543210",
        type: "Current",
        balance: 120000,
        status: "Active",
      },
    ];

    setAccounts(dummyAccounts);
  }, []);

  return (
    <div className="accounts-page">
      <h1 className="accounts-title">My Accounts</h1>
      {error ? (
        <p className="error">{error}</p>
      ) : accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        <div className="accounts-list">
          {accounts.map((acc) => (
            <div key={acc.id} className="account-card">
              <h2>{acc.type} Account</h2>
              <p><strong>Holder:</strong> {acc.holder}</p>
              <p><strong>Account No:</strong> {acc.number}</p>
              <p><strong>Balance:</strong> ₹ {acc.balance.toLocaleString()}</p>
              <p className={`status ${acc.status.toLowerCase()}`}>
                {acc.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accounts;
