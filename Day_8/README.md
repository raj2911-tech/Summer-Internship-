# 📑 Daily Task Submission Report  
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-22 |
| **Course Day** | Day 8 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned the basics of backend development using **Node.js** and **Express.js**, and created a simple server with basic API endpoints.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Created a basic Express backend server.
- **How:** Set up an Express app, enabled JSON parsing, and defined simple routes.
- **Why:** To understand how backend servers handle requests and send responses.

### 2. Server Setup
- Installed and used **Express.js**.
- Created a server running on port `3000`.
- Added middleware using `express.json()` for JSON request handling.

### 3. API Endpoints Created
- **`/`** → Returns a simple text response: `Backend is running`
- **`/hello`** → Returns a JSON response: `{ message: "Hello from backend" }`

### 4. Backend Introduction
- Learned how a backend server works.
- Understood the role of routes in handling client requests.
- Practiced sending both text and JSON responses from the server.

---

## 💻 Code Snippet: My Primary Contribution

````js
// filepath: server.js
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

````

## 💡 Key Learnings

### Backend Basics
- A backend handles request and response logic.
- Express.js makes server creation simple and fast.
- Routes are used to define API endpoints.
- JSON is commonly used for data exchange between frontend and backend.

---

## 🔗 Live Preview

- **Local Server:** http://localhost:3000
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-22*