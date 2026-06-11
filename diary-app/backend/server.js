const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const diaryRoutes = require("./routes/diaryRoutes");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// -----------------------------------------------
// Middleware
// -----------------------------------------------

// Allow requests from the React frontend (CORS)
app.use(
  cors({
    origin: "*", // In production, replace with your actual frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Parse incoming JSON request body
app.use(express.json());

// -----------------------------------------------
// Routes
// -----------------------------------------------

// Home route to check if API is running
app.get("/", function (req, res) {
  res.json({ message: "Personal Diary API is running!" });
});

// All diary entry routes
app.use("/api/entries", diaryRoutes);

// -----------------------------------------------
// Start the server
// -----------------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
