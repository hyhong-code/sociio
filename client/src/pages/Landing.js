import React from 'react';

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
            <a href="" className="btn btn-primary btn-lg px-4">
              Login
            </a>
            <a href="" className="btn btn-secondary btn-lg ml-2">
              Signup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
