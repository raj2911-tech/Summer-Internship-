import React, { useState } from "react";

import useCounter from "./useCounter.jsx";


// Component 1

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


// Component 2

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

// Main App

export default function App() {
  return (
    <div style={styles.container}>
      <h1>React Custom Hook Example</h1>

      <CounterOne />
      <CounterTwo />
    </div>
  );
}

/* =========================
   Simple Styling
========================= */
const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
    fontFamily: "Arial"
  },

  box: {
    border: "1px solid gray",
    padding: "20px",
    margin: "20px auto",
    width: "300px",
    borderRadius: "10px"
  }
};