const Crypto = require("../models/Crypto");

// @desc    Get all cryptocurrencies
// @route   GET /crypto
// @access  Public
exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /crypto/gainers
// @access  Public
exports.getTopGainers = async (req, res) => {
  try {
    // Sort by 24h change descending (highest percentage increase first)
    const gainers = await Crypto.find({}).sort({ change24h: -1 });
    res.json(gainers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get new listings
// @route   GET /crypto/new
// @access  Public
exports.getNewListings = async (req, res) => {
  try {
    // Sort by createdAt descending (newest first)
    const newListings = await Crypto.find({}).sort({ createdAt: -1 });
    res.json(newListings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /crypto
// @access  Public (or could be private for admin only, but instructions just say POST /crypto)
exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || !price || !image || change24h === undefined) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const cryptoExists = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (cryptoExists) {
      return res.status(400).json({ message: "Cryptocurrency with this symbol already exists" });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
    });

    res.status(201).json({
      message: "Cryptocurrency added successfully",
      data: crypto
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
