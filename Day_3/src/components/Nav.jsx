import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Raj Ghoniya</div>
            <ul className="navbar-menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;