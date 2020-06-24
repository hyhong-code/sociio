import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="" className="navbar-brand">
          sociio
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#nb"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nb">
          <ul className="navbar-nav">
            <li className="nav-item justify-content-center d-flex">
              <a href="index.html" className="nav-link active">
                <i className="fas fa-home mr-2"></i>Home
              </a>
            </li>
            <li className="nav-item justify-content-center d-flex">
              <a href="posts.html" className="nav-link">
                <i className="fas fa-fire mr-2"></i>Trending
              </a>
            </li>
            <li className="nav-item justify-content-center d-flex">
              <a href="posts.html" className="nav-link">
                <i className="fas fa-users mr-2"></i>For you
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item justify-content-center d-flex">
              <a href="profile.html" className="nav-link">
                <i className="fas fa-id-badge mr-2"></i>Profile
              </a>
            </li>
            <li className="nav-item justify-content-center d-flex">
              <a href="signin.html" className="nav-link">
                <i className="fas fa-key mr-2"></i>Signin
              </a>
            </li>
            <li className="nav-item justify-content-center d-flex">
              <a href="signup.html" className="nav-link">
                <i className="fas fa-user-plus mr-2"></i>Signup
              </a>
            </li>
            <li className="nav-item justify-content-center d-flex">
              <a href="index.html" className="nav-link">
                <i className="fas fa-sign-out-alt mr-2"></i> Signout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
