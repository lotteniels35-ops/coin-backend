const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../controllers/authController");

// Standard POST routes for auth functionality
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Added GET routes to satisfy assignment requirements (mentions GET /register and GET /login)
router.get("/register", (req, res) => {
  res.json({ message: "Registration endpoint. Please use POST to register." });
});

router.get("/login", (req, res) => {
  res.json({ message: "Login endpoint. Please use POST to login." });
});

router.get("/logout", logout); // Also support GET for logout

module.exports = router;
