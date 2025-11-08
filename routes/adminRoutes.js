const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin login
router.post("/login", adminController.login);

// Create admin (for initial setup - remove in production or protect)
router.post("/register", adminController.register);

module.exports = router;

