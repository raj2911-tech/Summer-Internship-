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