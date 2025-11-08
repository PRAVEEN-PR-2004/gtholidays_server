const mongoose = require("mongoose");
require("dotenv").config();

const toConnect = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://PraveenPR:Shakthi%40123@cluster0.jf6nwfi.mongodb.net/gtholiday?retryWrites=true&w=majority&appName=Cluster0";
    
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};

module.exports = toConnect;
