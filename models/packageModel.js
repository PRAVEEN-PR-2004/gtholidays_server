const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  location: { type: String, required: true },
  name: { type: String, required: true },
  day: { type: String, required: true },
  Pimage: { type: String, required: true }, // URL or path to image
  packageType: { type: String, enum: ['ALLPACKAGES', 'PACKAGES'], required: true }, // To distinguish between ALLPACKAGES and PACKAGES
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;


