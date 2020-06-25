import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions/authActions';
import { setAlert } from '../actions/alertActions';
import PropTypes from 'prop-types';

const Signup = ({ signUp, setAlert, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, handle, email, password, confirmPassword } = formData;

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await signUp(formData, history);
  };

  return (
    <section id="signup" className="bg-light d-flex">
      <div className="container align-self-center">
        <div className="row">
          <div className="col-10 offset-1 col-md-6 offset-md-3">
            <form
              className="bg-dark text-light px-4 px-md-5 py-5 rounded"
              onSubmit={handleSubmit}
            >
              <h1 className="my-4 display-4">
                SIGN UP <i className="fas fa-user-plus"></i>
              </h1>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={name}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Handle"
                  name="handle"
                  onChange={handleChange}
                  value={handle}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={confirmPassword}
                />
              </div>
              <input
                type="submit"
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

Signup.propTypes = {
  signUp: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { signUp, setAlert })(Signup);
