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
