import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ViewEntryPage from "./pages/ViewEntryPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header shown on all pages */}
        <header className="app-header">
          <h1>📔 My Personal Diary</h1>
        </header>

        {/* Page routes */}
        <main className="app-main">
          <Routes>
            {/* Home page - shows form and all entries */}
            <Route path="/" element={<HomePage />} />

            {/* View single entry page */}
            <Route path="/entry/:id" element={<ViewEntryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
