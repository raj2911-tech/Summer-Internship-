const express = require("express");
const cron = require("node-cron");

const app = express();
const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Every minute
cron.schedule("* * * * *", () => {
  console.log("Cron job executed every minute:", new Date().toLocaleString());
});

// Every day at 9 AM
cron.schedule("0 9 * * *", () => {
  console.log("Daily 9 AM cron job executed:", new Date().toLocaleString());
});

// Every 5 seconds
cron.schedule("*/5 * * * * *", () => {
  console.log("Cron running every 5 seconds:", new Date().toLocaleString());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});