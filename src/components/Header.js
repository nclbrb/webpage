import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="#">My Profile</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/education" className="nav-link">Education</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
