import { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./pages/Products";
import Nav from "./components/Nav";


function App() {
 

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />

      </Routes>
    </Router>
  );
}

export default App;
