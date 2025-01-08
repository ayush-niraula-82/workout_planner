// imports
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

// variables
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// server
const app = express();

// variables

// connect to database
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database.");
    listenToApp();
  })
  .catch((err) => {
    console.log("Database connection error:", err);
    process.exit(1); // Exit if database connection fails
  });

app.use(express.json());
app.use("/api", workoutRoutes);

function listenToApp() {
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Server running on port ${PORT}`);
  });
}
