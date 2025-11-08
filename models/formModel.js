const mongoose = require("mongoose");

const formScheme = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  destination: { type: String, required: true },
  dateOfTravel: { type: Date, required: true },
  people: { type: Number, required: true },
  vacationType: { type: String, required: true },
}, {
  timestamps: true 
});
const formData = mongoose.model("formDatas", formScheme);
module.exports = formData;
