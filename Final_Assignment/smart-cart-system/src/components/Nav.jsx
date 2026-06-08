import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🛒 Smart-Cart-System
        </Link>
        
        <ul className="navbar-menu">
          <li>
            <Link to="/products" className="navbar-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="navbar-link">
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;