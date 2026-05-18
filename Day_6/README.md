# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-18 |
| **Course Day** | Day 6 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned about React `useContext` and how it helps share data between components without passing props manually at every level.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Implemented shared state management using Context API.
- **How:** Created a context, wrapped components with a provider, and consumed values using `useContext`.
- **Why:** To avoid prop drilling and make state access cleaner across nested components.

### 2. Context Setup
- Created a custom context using `createContext()`.
- Wrapped the app (or a section of it) with `Context.Provider`.
- Passed shared values like `user` and `theme` through provider `value`.

### 3. Consuming Context Data
- Used `useContext(MyContext)` inside child components.
- Accessed shared state directly without passing props from parent to child repeatedly.
- Updated UI based on context values.

### 4. UI/UX Enhancements
- Displayed context-based data in multiple components.

---

## 💻 Code Snippet: My Primary Contribution

````jsx

import React, { createContext } from "react";
import Parent from "./Parent";

// Create Context
export const UserContext = createContext();

function App() {
  const user = {
    name: "Raj",
    age: 22,
    role: "Developer",
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>useContext Demo</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;

````

````jsx
import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div
    style={
        {
            border: "2px solid red",
            padding: "10px"
        }
    }
    >
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

export default Parent;

````

````jsx
import React, { useContext } from "react";
import { UserContext } from "./App";

function Child() {
  const user = useContext(UserContext);

  return (
    <div
      className="child"
      style={{
        border: "2px solid blue",
        padding: "10px",
      }}
    >
      <h3>Child Component</h3>
      <p>Logged in user: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Child;

````

## 💡 Key Learnings

### React Context & useContext
- `createContext()` creates a shared data container.
- `Context.Provider` makes data available to nested components.
- `useContext()` lets components directly access shared values.
- `useContext` helps avoid prop drilling in deeply nested component trees.

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-18*