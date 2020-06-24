import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';
import PropTypes from 'prop-types';

const Signin = ({ signIn, history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signIn(formData, history);
  };

  const { email, password } = formData;

  return (
    <section id="signin" className="bg-light d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-10 offset-1 col-md-6 offset-md-3">
            <form
              onSubmit={handleSubmit}
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
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-secondary d-block mx-auto my-4"
                value="Welcome Back"
              />
              <small>
                Don't have an account?
                <Link to="/signup"> SIGN UP &rarr;</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Signin.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default connect(null, { signIn })(Signin);
