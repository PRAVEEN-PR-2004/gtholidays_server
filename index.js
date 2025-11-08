const express = require("express");
const cors = require("cors");
const toConnect = require("./dp");


const packageRoutes = require("./routes/packageRoutes");
const formRoutes = require("./routes/formRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.static('public'));
app.use(cors()); 
app.use(express.json());

toConnect();

app.use("/api/packages", packageRoutes);
app.use("/", formRoutes); 
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
