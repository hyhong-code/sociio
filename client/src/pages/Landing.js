import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="home">
      <div className="overlay">
        <div className="container text-light text-center">
          <h1>sociio</h1>
          <p className="lead">
            <i className="fas fa-wifi"></i> connect with the world, anytime,
            anywhere!
          </p>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Sign in
            </Link>
            <Link to="/signup" className="btn btn-secondary btn-lg ml-2">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
