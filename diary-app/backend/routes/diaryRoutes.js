const express = require("express");
const router = express.Router();
const DiaryEntry = require("../models/DiaryEntry");

// -----------------------------------------------
// GET /api/entries
// Get all diary entries (newest first)
// -----------------------------------------------
router.get("/", async function (req, res) {
  try {
    // Find all entries and sort by createdAt descending (newest first)
    const entries = await DiaryEntry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: entries.length,
      data: entries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching entries",
      error: error.message,
    });
  }
});

// -----------------------------------------------
// GET /api/entries/:id
// Get a single diary entry by its ID
// -----------------------------------------------
router.get("/:id", async function (req, res) {
  try {
    const entry = await DiaryEntry.findById(req.params.id);

    // If no entry found with that ID
    if (!entry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    res.status(200).json({
      success: true,
      data: entry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching entry",
      error: error.message,
    });
  }
});

// -----------------------------------------------
// POST /api/entries
// Create a new diary entry
// -----------------------------------------------
router.post("/", async function (req, res) {
  try {
    const { date, title, message } = req.body;

    // Basic validation - check if all fields are provided
    if (!date || !title || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide date, title and message",
      });
    }

    // Create new entry in database
    const newEntry = await DiaryEntry.create({
      date: date,
      title: title,
      message: message,
    });

    res.status(201).json({
      success: true,
      message: "Diary entry created successfully",
      data: newEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating entry",
      error: error.message,
    });
  }
});

// -----------------------------------------------
// PUT /api/entries/:id
// Update an existing diary entry
// -----------------------------------------------
router.put("/:id", async function (req, res) {
  try {
    const { date, title, message } = req.body;

    // Find the entry by ID and update it
    const updatedEntry = await DiaryEntry.findByIdAndUpdate(
      req.params.id,
      {
        date: date,
        title: title,
        message: message,
      },
      {
        new: true, // return the updated document
        runValidators: true, // run schema validators on update
      }
    );

    if (!updatedEntry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Entry updated successfully",
      data: updatedEntry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating entry",
      error: error.message,
    });
  }
});

// -----------------------------------------------
// DELETE /api/entries/:id
// Delete a diary entry
// -----------------------------------------------
router.delete("/:id", async function (req, res) {
  try {
    const deletedEntry = await DiaryEntry.findByIdAndDelete(req.params.id);

    if (!deletedEntry) {
      return res.status(404).json({
        success: false,
        message: "Entry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Entry deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting entry",
      error: error.message,
    });
  }
});

module.exports = router;
