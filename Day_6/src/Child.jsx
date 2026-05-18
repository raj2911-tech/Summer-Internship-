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