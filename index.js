const express = require("express");
const cors = require("cors");
const toConnect = require("./dp");

// Import routes
const packageRoutes = require("./routes/packageRoutes");
const formRoutes = require("./routes/formRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());

// Connect to the database
toConnect();

// Routes
app.use("/api/packages", packageRoutes);
app.use("/", formRoutes); // Form submission route
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
