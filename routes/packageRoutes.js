const express = require("express");
const router = express.Router();
const packageController = require("../controllers/packageController");

// Get all packages (filtered by type)
router.get("/", packageController.getAllPackages);

// Get single package by ID
router.get("/:id", packageController.getPackageById);

// Create new package
router.post("/", packageController.createPackage);

// Update package
router.put("/:id", packageController.updatePackage);

// Delete package
router.delete("/:id", packageController.deletePackage);

module.exports = router;

