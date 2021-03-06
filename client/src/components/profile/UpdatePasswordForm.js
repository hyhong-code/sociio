import React from 'react';
import { displayProfilePanel } from '../../actions/profileAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UpdatePasswordForm = ({ displayProfilePanel }) => {
  return (
    <div className="col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center py-5 rounded">
      <form action="">
        <p className="lead">RESET PASSWORD</p>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Current Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            onClick={displayProfilePanel}
            className="btn btn-secondary px-3 mr-2"
          >
            Back
          </button>
          <input
            type="submit"
            className="btn btn-warning text-parimary"
            value="Reset"
          />
        </div>
      </form>
    </div>
  );
};

UpdatePasswordForm.propTypes = {
  displayProfilePanel: PropTypes.func.isRequired,
};

export default connect(null, { displayProfilePanel })(UpdatePasswordForm);
