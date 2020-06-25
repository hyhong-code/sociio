import React from 'react';
import defaultImg from '../../img/default.jpeg';
import UploadPhotoForm from './UploadPhotoForm';
import { connect } from 'react-redux';
import {
  displayProfileEditInfo,
  displayProfileDelectAccount,
  displayProfileEditPassword,
} from '../../actions/profileAction';
import PropTypes from 'prop-types';

const ProfilePanel = ({
  displayProfileEditInfo,
  displayProfileDelectAccount,
  displayProfileEditPassword,
  profile,
}) => {
  return (
    <div className="col-md-4 mb-4 d-flex flex-column justify-content-center align-items-center py-3 py-md-5 rounded">
      <img
        src={defaultImg}
        alt=""
        className="img-fluid rounded-circle mb-3"
        width="200"
      />
      <h4>{profile.user.name}</h4>
      <p className="text-primary ml-2 d-block">@ {profile.user.handle}</p>
      <p className="text-muted">
        <i className="fas fa-location-arrow mr-1"></i>Seattle
      </p>
      <div className="mb-3 d-flex">
        <p className="lead mr-3">
          Followers:{' '}
          <span className="badge badge-primary">
            {profile.influence.followers.length}
          </span>
        </p>
        <p className="lead">
          Following:{' '}
          <span className="badge badge-info">
            {profile.influence.followers.length}
          </span>
        </p>
      </div>

      <p className="text-center pt-3 border-top">
        <strong className="mr-2">Bio:</strong>
        <span>{!!profile.bio ? profile.bio : 'User not yet has a bio.'}</span>
      </p>
      <form className="text-center">
        <UploadPhotoForm />
      </form>
      <div className="d-flex flex-column">
        <button
          onClick={displayProfileEditInfo}
          className="btn btn-outline-primary px-4 mb-1"
        >
          Edit Profile
        </button>
        <button
          onClick={displayProfileEditPassword}
          className="btn btn-outline-info px-4 mb-1"
        >
          Reset Password
        </button>
        <button
          onClick={displayProfileDelectAccount}
          className="btn btn-outline-danger"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

ProfilePanel.propTypes = {
  displayProfileEditInfo: PropTypes.func.isRequired,
  displayProfileDelectAccount: PropTypes.func.isRequired,
  displayProfileEditPassword: PropTypes.func.isRequired,
};

export default connect(null, {
  displayProfileEditInfo,
  displayProfileDelectAccount,
  displayProfileEditPassword,
})(ProfilePanel);
