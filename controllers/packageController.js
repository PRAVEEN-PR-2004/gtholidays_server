const Package = require("../models/packageModel");

const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find({}).sort({ createdAt: -1 });
    res.json(packages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: "Error fetching packages" });
  }
};

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

const createPackage = async (req, res) => {
  try {
    const { location, name, day, Pimage } = req.body;
    const newPackage = new Package({
      location,
      name,
      day,
      Pimage,
      updatedAt: new Date()
    });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    console.error("Error creating package:", error);
    res.status(500).json({ error: "Error creating package" });
  }
};

const updatePackage = async (req, res) => {
  try {
    const { location, name, day, Pimage } = req.body;
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      {
        location,
        name,
        day,
        Pimage,
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

