const Package = require("../models/packageModel");

// Get all packages (filtered by type)
const getAllPackages = async (req, res) => {
  try {
    const { type } = req.query; // 'ALLPACKAGES' or 'PACKAGES'
    const query = type ? { packageType: type } : {};
    const packages = await Package.find(query).sort({ createdAt: -1 });
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: "Error fetching packages" });
  }
};

// Get single package by ID
const getPackageById = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    if (!package) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.json(package);
  } catch (error) {
    console.error("Error fetching package:", error);
    res.status(500).json({ error: "Error fetching package" });
  }
};

// Create new package
const createPackage = async (req, res) => {
  try {
    const { location, name, day, Pimage, packageType } = req.body;
    const newPackage = new Package({
      location,
      name,
      day,
      Pimage,
      packageType: packageType || "ALLPACKAGES",
      updatedAt: new Date()
    });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Error creating package" });
  }
};

// Update package
const updatePackage = async (req, res) => {
  try {
    const { location, name, day, Pimage, packageType } = req.body;
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      {
        location,
        name,
        day,
        Pimage,
        packageType,
        updatedAt: new Date()
      },
      { new: true }
    );
    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.json(updatedPackage);
  } catch (error) {
    console.error("Error updating package:", error);
    res.status(500).json({ error: "Error updating package" });
  }
};

// Delete package
const deletePackage = async (req, res) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    res.json({ message: "Package deleted successfully" });
  } catch (error) {
    console.error("Error deleting package:", error);
    res.status(500).json({ error: "Error deleting package" });
  }
};

module.exports = {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage
};

