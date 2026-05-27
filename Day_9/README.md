# 📑 Daily Task Submission Report  
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Raj Ghoniya |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-25 |
| **Course Day** | Day 9 |
| **GitHub Repo** | https://github.com/raj2911-tech/Summer-Internship- |

---

## 🎯 Daily Objective

> Today, I learned how to build a **simple calculator API** using **Node.js** and **Express.js**, combining interactive CLI input with dynamic backend routing based on user operations.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Created an interactive calculator server using Express.
- **How:** Used Node.js `readline` module to accept user input (two numbers and an operator), then dynamically created Express routes based on the operator selected.
- **Why:** To understand how backend logic can respond dynamically based on user input and how to handle different operation types.

### 2. Server Setup
- Integrated **readline** module for CLI interactivity.
- Created an Express app that listens on port `3000`.
- Implemented dynamic route handling based on mathematical operators.

### 3. Features Implemented
- **Input Collection:** Prompts user for two numbers and an operator (+, -, *, /).
- **Dynamic Routing:** Creates `/calculate` endpoint with logic based on selected operator.
- **Operations Supported:**
  - `+` → Addition
  - `-` → Subtraction
  - `*` → Multiplication
  - `/` → Division
  - Invalid operator → Error message

### 4. Key Learnings
- How to use `readline` for synchronous user input in Node.js.
- Dynamic route definition based on application logic.
- Type conversion from string to number.
- Error handling for invalid operators.

---

## 💻 Code Snippet: My Primary Contribution

````js
// filepath: server.js
const express = require("express");
const readline = require("readline");

const app = express();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", (a) => {
  rl.question("Enter second number: ", (b) => {
    rl.question("Enter sign (+,-,*,/): ", (c) => {

      a = Number(a);
      b = Number(b);

      if (c === "+") {
        app.get("/calculate", (req, res) => {
          res.send(`${a} + ${b} = ${a + b}`);
        });
      }
      else if (c === "-") {
        app.get("/calculate", (req, res) => {
          res.send(`${a} - ${b} = ${a - b}`);
        });
      }
      else if (c === "*") {
        app.get("/calculate", (req, res) => {
          res.send(`${a} * ${b} = ${a * b}`);
        });
      }
      else if (c === "/") {
        app.get("/calculate", (req, res) => {
          res.send(`${a} / ${b} = ${a / b}`);
        });
      }
      else {
        app.get("/calculate", (req, res) => {
          res.send("Invalid operator");
        });
      }

      app.listen(3000, () => {
        console.log("Server running on port 3000");
      });

      rl.close();
    });
  });
});

````

## 💡 Key Learnings

### Interactive Backend Development
- **Readline Module:** Used for prompting users in CLI environment.
- **Dynamic Routing:** Routes can be defined conditionally based on application state.
- **Type Conversion:** Converting string inputs to numbers for calculations.
- **Error Handling:** Managing invalid operators gracefully.

---

## 🔗 Live Preview

- **Local Server:** http://localhost:3000
- **Git Repository:** https://github.com/raj2911-tech/Summer-Internship-

---

**Signature:**  
*Raj Ghoniya*  
*Date: 2026-05-25*