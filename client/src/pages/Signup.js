import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section id="signup" className="bg-light d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-10 offset-1 col-md-6 offset-md-3">
            <form
              action=""
              className="bg-dark text-light px-4 px-md-5 py-5 rounded"
            >
              <h1 className="my-4 display-4">
                SIGN UP <i className="fas fa-user-plus"></i>
              </h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Handle"
                />
              </div>

              <div className="form-group">
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <input
                type="text"
                className="btn btn-secondary d-block mx-auto my-4"
                value="Join Now"
              />
              <small>
                Already have an account?
                <Link to="signin"> SIGN IN &rarr;</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
