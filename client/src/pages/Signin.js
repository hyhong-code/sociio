import React from 'react';

const Signin = () => {
  return (
    <section id="signin" className="bg-light d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-10 offset-1 col-md-6 offset-md-3">
            <form
              action=""
              className="bg-dark text-light px-4 px-md-5 py-5 rounded"
            >
              <h1 className="my-4 display-4">
                SIGN IN <i className="fas fa-door-open"></i>
              </h1>
              <div className="form-group mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <input
                type="text"
                className="btn btn-secondary d-block mx-auto my-4"
                value="Welcome Back"
              />
              <small>
                Don't have an account?
                <a href="signin.html"> SIGN UP &rarr;</a>
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
