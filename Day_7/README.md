# 📑 Daily Task Submission Report  
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-19 |
| **Course Day** | Day 7 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned about React **Custom Hooks** and how they help reuse stateful logic across multiple components in a clean and organized way.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Created a reusable custom hook named `useCounter`.
- **How:** Used `useState` inside a custom function to manage counter state and related actions.
- **Why:** To reuse counter logic in multiple components without repeating code.

### 2. Custom Hook Setup
- Created a hook called `useCounter(initialValue)`.
- Accepted a dynamic initial value for different counters.
- Returned `count`, `increment`, `decrement`, and `reset`.

### 3. Hook Usage in Components
- Used `useCounter(0)` in `CounterOne`.
- Used `useCounter(10)` in `CounterTwo`.
- Each component managed its own independent counter state.

### 4. UI/UX Enhancements
- Displayed two separate counter cards.
- Added buttons for increment, decrement, and reset.
- Kept the UI simple and easy to understand.

---

## 💻 Code Snippet: My Primary Contribution

````jsx
// filepath: useCounter.jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
````



````jsx
// filepath: App.jsx
import React from "react";
import useCounter from "./useCounter.jsx";

function CounterOne() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div style={styles.box}>
      <h2>Counter One</h2>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function CounterTwo() {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div style={styles.box}>
      <h2>Counter Two</h2>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.container}>
      <h1>React Custom Hook Example</h1>
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

````

## 💡 Key Learnings

### React Custom Hooks
- Custom hooks allow reusable stateful logic.
- They help keep components clean and avoid duplicate code.
- A custom hook can accept parameters and return values/functions.
- Each hook instance manages its own state independently.

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-19*