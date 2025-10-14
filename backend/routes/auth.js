// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();
const JWT_SECRET = "your_jwt_secret_key"; 

router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const checkUser = "SELECT * FROM users WHERE email = ?";
  db.query(checkUser, [email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length > 0)
      return res.status(400).json({ message: "User already exists" });

 
    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.status(200).json({ message: "Signup successful" });
    });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = result[0];
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ message: "Login successful", token });
  });
});

export default router;
