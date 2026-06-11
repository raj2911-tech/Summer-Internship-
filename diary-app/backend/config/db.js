const mongoose = require("mongoose");

// This function connects to MongoDB using the URI from .env file
function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(function () {
      console.log("MongoDB connected successfully");
    })
    .catch(function (error) {
      console.log("MongoDB connection failed:", error.message);
      process.exit(1); // Stop the server if DB connection fails
    });
}

module.exports = connectDB;
