const express = require("express");
const router = express.Router();
const {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  addCrypto,
} = require("../controllers/cryptoController");

// @route   GET /crypto
router.get("/", getAllCryptos);

// @route   GET /crypto/gainers
router.get("/gainers", getTopGainers);

// @route   GET /crypto/new
router.get("/new", getNewListings);

// @route   POST /crypto
router.post("/", addCrypto);

module.exports = router;
