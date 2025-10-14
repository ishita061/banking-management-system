import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",          
  password: "",          
  database: "bank_db"    
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

export default db;
db.js
