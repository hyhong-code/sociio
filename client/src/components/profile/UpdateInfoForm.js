import React from 'react';

const UpdateInfoForm = () => {
  return (
    <div className="col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center py-5 rounded">
      <form action="">
        <p className="lead">UPDATE INFO</p>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Handle" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Address" />
        </div>
        <small className="d-block mb-3">Your address wont't be shared.</small>
        <div className="d-flex justify-content-center">
          <a href="" className="btn btn-secondary px-3 mr-2">
            Back
          </a>
          <input type="submit" className="btn btn-info" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default UpdateInfoForm;
