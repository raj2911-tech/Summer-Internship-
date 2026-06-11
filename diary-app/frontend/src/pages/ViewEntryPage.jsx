import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEntryById } from "../services/api.js";

function ViewEntryPage() {
  // Get the ID from the URL (e.g. /entry/abc123)
  const { id } = useParams();
  const navigate = useNavigate();

  // State for the single entry
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the entry when the page loads
  useEffect(
    function () {
      getEntryById(id)
        .then(function (response) {
          setEntry(response.data.data);
          setLoading(false);
        })
        .catch(function () {
          setError("Could not find this diary entry.");
          setLoading(false);
        });
    },
    [id]
  );

  // Format the date nicely (e.g. "2024-01-15" → "January 15, 2024")
  function formatDate(dateString) {
    if (!dateString) return "";
    var parts = dateString.split("-");
    if (parts.length !== 3) return dateString;

    var months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December",
    ];
    var monthIndex = parseInt(parts[1], 10) - 1;
    return months[monthIndex] + " " + parts[2] + ", " + parts[0];
  }

  // Go back to the home page
  function handleGoBack() {
    navigate("/");
  }

  if (loading) {
    return <div className="loading">Loading entry...</div>;
  }

  if (error) {
    return (
      <div>
        <div className="error-msg">{error}</div>
        <button className="back-button" onClick={handleGoBack}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Back button */}
      <button className="back-button" onClick={handleGoBack}>
        ← Back to All Entries
      </button>

      {/* Full diary entry card */}
      <div className="view-entry-card">
        <p className="entry-date">{formatDate(entry.date)}</p>
        <h2>{entry.title}</h2>
        <p className="entry-created">
          Written on:{" "}
          {new Date(entry.createdAt).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="entry-message">{entry.message}</p>
      </div>
    </div>
  );
}

export default ViewEntryPage;
