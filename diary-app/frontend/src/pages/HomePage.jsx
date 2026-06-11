import React, { useState, useEffect } from "react";
import DiaryForm from "../components/DiaryForm.jsx";
import EntriesTable from "../components/EntriesTable.jsx";
import { getAllEntries } from "../services/api.js";

function HomePage() {
  // State to hold all diary entries
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // This runs once when the page loads - fetch all entries
  useEffect(function () {
    loadEntries();
  }, []);

  // Function to fetch all entries from the backend
  function loadEntries() {
    setLoading(true);
    setError("");

    getAllEntries()
      .then(function (response) {
        setEntries(response.data.data);
        setLoading(false);
      })
      .catch(function () {
        setError("Failed to load entries. Please refresh the page.");
        setLoading(false);
      });
  }

  return (
    <div>
      {/* Top section: Form to add a new entry */}
      <DiaryForm onEntryAdded={loadEntries} />

      {/* Bottom section: Table of all entries */}
      {error && <div className="error-msg">{error}</div>}

      {loading ? (
        <div className="loading">Loading entries...</div>
      ) : (
        <EntriesTable entries={entries} onEntryDeleted={loadEntries} />
      )}
    </div>
  );
}

export default HomePage;
