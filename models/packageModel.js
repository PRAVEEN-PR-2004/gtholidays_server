const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  location: { type: String, required: true },
  name: { type: String, required: true },
  day: { type: String, required: true },
  Pimage: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;


