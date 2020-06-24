import React from 'react';

const UpdatePasswordForm = () => {
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
        <a href="" className="btn btn-secondary px-3">
          Back
        </a>
        <input
          type="submit"
          className="btn btn-warning text-parimary"
          value="Reset"
        />
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
