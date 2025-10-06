import React, { useEffect, useState } from "react";
import "./Transactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("bms_token");
    if (!token) {
      setError("Not authenticated. Please login.");
      return;
    }

    const dummyTransactions = [
      {
        id: "TXN12345",
        date: "2025-10-01",
        description: "Salary Credit",
        type: "Credit",
        amount: 50000,
        balance: 120000,
      },
      {
        id: "TXN12346",
        date: "2025-10-02",
        description: "ATM Withdrawal",
        type: "Debit",
        amount: 2000,
        balance: 118000,
      },
      {
        id: "TXN12347",
        date: "2025-10-03",
        description: "Online Shopping",
        type: "Debit",
        amount: 3500,
        balance: 114500,
      },
    ];

    setTransactions(dummyTransactions);
  }, []);

  return (
    <div className="transactions-page">
      <h1 className="transactions-title">My Transactions</h1>

      {error ? (
        <p className="error">{error}</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.date}</td>
                <td>{txn.description}</td>
                <td className={txn.type.toLowerCase()}>{txn.type}</td>
                <td className={txn.type.toLowerCase()}>
                  {txn.type === "Debit" ? "- " : "+ "}₹{txn.amount.toLocaleString()}
                </td>
                <td>₹{txn.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Transactions;
