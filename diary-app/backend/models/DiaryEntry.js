const mongoose = require("mongoose");

// This is the schema (structure) for each diary entry
const diarySchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true, // removes extra spaces from start and end
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt fields
  }
);

// Create the model from the schema
const DiaryEntry = mongoose.model("DiaryEntry", diarySchema);

module.exports = DiaryEntry;
