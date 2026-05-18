import React from "react";
import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import LandingPage from "./LandingPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-[264px] p-6">
          <LandingPage />
        </main>
      </div>
    </div>
  );
}