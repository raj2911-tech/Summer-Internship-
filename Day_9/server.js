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