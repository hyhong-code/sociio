import React from 'react';

const DeleteAccountForm = () => {
  return (
    <div className="col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center py-5 rounded">
      <form action="">
        <p className="lead">DELETE ACCOUNT</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-exclamation-circle text-danger"></i>
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Password" />
        </div>
        <small className="d-block mb-3 text-danger">
          Your account won't be recovered.
        </small>
        <div className="d-flex justify-content-center">
          <a href="" className="btn btn-success px-3 mr-2">
            Back
          </a>
          <input
            type="submit"
            className="btn btn-danger"
            value="Delete Account"
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteAccountForm;
