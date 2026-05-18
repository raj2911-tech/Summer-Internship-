import React from "react";

function Button({ children }) {
  return (
    <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
      {children}
    </button>
  );
}

export default function LandingPage() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to the App</h1>
        <p className="text-gray-600 mb-6">This is a basic landing page. Add your content here.</p>
        <div className="flex gap-3">
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
}