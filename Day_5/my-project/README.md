# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-16 |
| **Course Day** | Day 5 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned how to use ready-made components and Tailwind CSS to build responsive UI layouts. I practiced integrating pre-built components like Navbar, Sidebar, and LandingPage while styling them with Tailwind utility classes to create a modern, professional interface.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. Ready-Made Components Integration
- **What:** Integrated reusable UI components (Navbar, Sidebar, LandingPage).
- **How:** Used components from ReadyMadeUI and customized them with Tailwind CSS.
- **Why:** To understand component reusability and how to build scalable UI structures.

### 2. Tailwind CSS Styling
- Applied utility-first CSS classes for responsive design.
- Used Tailwind classes like `flex`, `grid`, `rounded-lg`, `shadow-md`, `hover:` states.
- Implemented responsive design with `md:`, `lg:`, `max-lg:` breakpoints.

### 3. Layout Structure
- Created a fixed Sidebar with navigation sections.
- Built a responsive Navbar with mobile hamburger menu.
- Designed a flexible LandingPage component with hero section.

---

## 💻 Code Snippet: My Primary Contribution

````jsx
// App.jsx - Main layout structure
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
`````

## 💡 Key Learnings

### Component Reusability
- Breaking UI into smaller, reusable components.
- Props-based customization of components.
- Consistent styling across components.

### Tailwind CSS
- Utility-first CSS framework speeds up development.
- Responsive design using responsive prefixes (md:, lg:, max-lg:).


---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-16*
