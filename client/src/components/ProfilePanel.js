import React from 'react';
import UploadPhotoForm from './UploadPhotoForm';

const ProfilePanel = () => {
  return (
    <div className="col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center py-3 py-md-5 rounded">
      <img
        src="./img/default.jpeg"
        alt=""
        className="img-fluid rounded-circle mb-3"
        width="200"
      />
      <h4>
        John Doe<small className="text-primary ml-2">@john-doe</small>
      </h4>
      <p className="text-muted">
        <i className="fas fa-location-arrow mr-1"></i>Seattle
      </p>
      <div className="mb-3 d-flex">
        <p className="lead mr-3">
          Followers: <span className="badge badge-primary">15</span>
        </p>
        <p className="lead">
          Following: <span className="badge badge-info">20</span>
        </p>
      </div>
      <p className="text-center pt-3 border-top">
        <strong>Bio:</strong>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
          eligendi?
        </span>
      </p>
      <form className="text-center">
        <UploadPhotoForm />
      </form>
      <div>
        <a href="" className="btn btn-primary px-4">
          Edit Profile
        </a>
        <a href="" className="btn btn-danger">
          Delete Account
        </a>
      </div>
    </div>
  );
};

export default ProfilePanel;
