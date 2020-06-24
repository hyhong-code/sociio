import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand ">
          sociio
        </Link>
        <div className="d-flex justify-content-between flex-grow-1">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mr-2">
              <Link to="/" className="nav-link px-1">
                <i className="fas fa-home mr-1"></i>
                <span className="d-none d-md-inline">Home</span>
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/home" className="nav-link px-1">
                <i className="fas fa-fire mr-1"></i>
                <span className="d-none d-md-inline">Trending</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link px-1">
                <i className="fas fa-users mr-1"></i>
                <span className="d-none d-md-inline">For you</span>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto flex-row">
            <li className="nav-item mr-2">
              <Link to="/profile" className="nav-link px-1">
                <i className="fas fa-id-badge mr-1"></i>
                <span className="d-none d-md-inline">Profile</span>
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/signin" className="nav-link px-1">
                <i className="fas fa-key mr-1"></i>
                <span className="d-none d-md-inline">Signin</span>
              </Link>
            </li>
            <li className="nav-item mr-2">
              <Link to="/signup" className="nav-link px-1">
                <i className="fas fa-user-plus mr-1"></i>
                <span className="d-none d-md-inline">Signup</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link px-1">
                <i className="fas fa-sign-out-alt mr-1"></i>
                <span className="d-none d-md-inline">Signout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
