const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// Get all form submissions
router.get("/", formController.getAllSubmissions);

module.exports = router;

