console.log("STEP 1");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

console.log("STEP 2");

const connectDB = require("./config/db");
const profileRoutes = require("./routes/profileRoutes");

console.log("STEP 3");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();



app.use("/api/profile",profileRoutes);


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
