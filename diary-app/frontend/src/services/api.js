import axios from "axios";

// In Vite, environment variables must start with VITE_ prefix
// In development: reads from .env file (VITE_API_URL=http://localhost:5000)
// In production: reads from Render environment variable
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get all diary entries
export function getAllEntries() {
  return api.get("/api/entries");
}

// Get a single entry by ID
export function getEntryById(id) {
  return api.get("/api/entries/" + id);
}

// Create a new diary entry
export function createEntry(entryData) {
  return api.post("/api/entries", entryData);
}

// Delete a diary entry
export function deleteEntry(id) {
  return api.delete("/api/entries/" + id);
}
