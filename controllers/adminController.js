const Admin = require("../models/adminModel");

// Admin login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    
    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    
    // In production, use JWT tokens
    res.json({ message: "Login successful", adminId: admin._id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
};

// Create admin (for initial setup - remove in production or protect)
const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const admin = new Admin({ username, password, email });
    await admin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ error: "Error creating admin" });
  }
};

module.exports = {
  login,
  register
};

