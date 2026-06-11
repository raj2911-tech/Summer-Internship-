import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteEntry } from "../services/api.js";

function EntriesTable({ entries, onEntryDeleted }) {
  const navigate = useNavigate();

  // When user clicks View button, go to the full entry page
  function handleView(id) {
    navigate("/entry/" + id);
  }

  // When user clicks Delete button
  function handleDelete(id) {
    var confirmed = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (!confirmed) return;

    deleteEntry(id)
      .then(function () {
        // Tell parent to refresh the list
        onEntryDeleted();
      })
      .catch(function () {
        alert("Failed to delete entry. Please try again.");
      });
  }

  // Trim the message to show only first 60 characters in table
  function getTruncatedMessage(msg) {
    if (msg.length > 60) {
      return msg.substring(0, 60) + "...";
    }
    return msg;
  }

  // Format the date nicely for display (e.g. "2024-01-15" → "Jan 15, 2024")
  function formatDate(dateString) {
    if (!dateString) return "";
    var parts = dateString.split("-");
    if (parts.length !== 3) return dateString;

    var months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    var monthIndex = parseInt(parts[1], 10) - 1;
    return months[monthIndex] + " " + parts[2] + ", " + parts[0];
  }

  return (
    <div className="entries-section">
      <h2>All Entries ({entries.length})</h2>

      <div className="entries-table-wrapper">
        <table className="entries-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Message Preview</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-entries">
                  No diary entries yet. Write your first entry above!
                </td>
              </tr>
            ) : (
              entries.map(function (entry, index) {
                return (
                  <tr key={entry._id}>
                    <td>{index + 1}</td>
                    <td>{formatDate(entry.date)}</td>
                    <td>{entry.title}</td>
                    <td>
                      <span className="truncated-message">
                        {getTruncatedMessage(entry.message)}
                      </span>
                    </td>
                    <td>
                      {/* View button - opens full entry */}
                      <button
                        className="view-button"
                        onClick={function () {
                          handleView(entry._id);
                        }}
                      >
                        View
                      </button>

                      {/* Delete button */}
                      <button
                        className="delete-button"
                        onClick={function () {
                          handleDelete(entry._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EntriesTable;
