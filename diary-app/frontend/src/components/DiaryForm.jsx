import React, { useState } from "react";
import { createEntry } from "../services/api.js";

function DiaryForm({ onEntryAdded }) {
  // Form field states
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // Status states
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // This function runs when the user clicks Submit
  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload

    // Simple check - all fields must be filled
    if (!date || !title || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    setErrorMessage("");
    setSuccessMessage("");

    // Send the data to the backend
    createEntry({ date: date, title: title, message: message })
      .then(function () {
        setSuccessMessage("Diary entry saved successfully!");
        // Clear the form
        setDate("");
        setTitle("");
        setMessage("");
        // Tell the parent component to refresh the entries list
        onEntryAdded();
      })
      .catch(function () {
        setErrorMessage("Failed to save entry. Please try again.");
      });
  }

  return (
    <div className="form-card">
      <h2>Write New Entry</h2>

      {/* Show success or error messages */}
      {successMessage && <div className="success-msg">{successMessage}</div>}
      {errorMessage && <div className="error-msg">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>
        {/* Date field */}
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={function (e) {
              setDate(e.target.value);
            }}
          />
        </div>

        {/* Title field */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Give your entry a title..."
            value={title}
            onChange={function (e) {
              setTitle(e.target.value);
            }}
          />
        </div>

        {/* Message field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your thoughts here..."
            value={message}
            onChange={function (e) {
              setMessage(e.target.value);
            }}
            rows={5}
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-button">
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default DiaryForm;
