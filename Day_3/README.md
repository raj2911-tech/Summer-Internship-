# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-14 |
| **Course Day** | Day 3 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned React routing to create multiple pages and navigate between them using `react-router-dom`. I also practiced Git workflow for working on multiple branches using `git merge` and `git stash` to manage changes safely during development.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Implemented routing for multiple pages such as Home, About, and Contact pages.
- **How:** Used `react-router-dom` with `BrowserRouter` and `Route` for navigation.
- **Why:** To understand single-page application navigation without full page reloads.

### 2. Git Workflow Practice
- Worked with multiple branches during development.
- Used `git merge` to combine changes from one branch into another.
- Used `git stash` to temporarily save unfinished changes and switch branches safely.
- Practiced pulling and syncing updates while keeping work organized.

### 3. UI/UX Enhancements
- Added navigation links for easy page switching.
- Used route-based component rendering.
- Added a fallback or no-login page for invalid routes or access handling.
- Improved user flow with clean navigation structure.

---

## 💻 Code Snippet: My Primary Contribution

````jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import NoLogin from './components/NoLogin.jsx';

function App() {

  const isLoggedIn = true; // Simulating user login status

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <NoLogin/>} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <NoLogin />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <NoLogin />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <NoLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
````
---


## 🛑 Challenges Faced & Solutions

- **Problem:** Forgot to install the `react-router-dom` package before implementing routing.
  - **Solution:** Installed the package using `npm install react-router-dom` and then configured routing properly.

- **Problem:** Forgot to import required components in some files.
  - **Solution:** Added the missing imports for React Router and page components before using them in `App.jsx`.

- **Problem:** CSS class name conflicts were causing styling issues.
  - **Solution:** Renamed conflicting class names and organized styles properly to avoid overlap.
  
---

## 💡 Key Learnings

### React Routing
- `BrowserRouter` provides routing support in React apps.
- `Routes` and `Route` are used to define page paths.
- `Link` or `NavLink` helps navigate without page refresh.
- Fallback routes can handle invalid URLs or access control.

### Git Merge
- `git merge <branch-name>` combines changes from one branch into another.
- Useful when working with multiple developers or features.
- Merge conflicts may happen if the same file is changed in different branches.
- Merges should be reviewed carefully before pushing.

### Git Stash
- `git stash` saves uncommitted changes temporarily.
- Useful when switching branches quickly.
- `git stash pop` restores saved changes.
- Helps keep the working directory clean and organized.

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-14*
