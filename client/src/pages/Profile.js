import React, { useEffect, useState } from 'react';
import ProfilePanel from '../components/profile/ProfilePanel';
import UserActivity from '../components/profile/UserActivity';
import FollowList from '../components/profile/FollowList';
import UpdateInfoForm from '../components/profile/UpdateInfoForm';
import UpdatePasswordForm from '../components/profile/UpdatePasswordForm';
import DeleteAccountForm from '../components/profile/DeleteAccountForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfile } from '../actions/profileAction';

const Profile = ({ profile, getProfile }) => {
  useEffect(() => {
    (async () => {
      getProfile();
    })();
  }, []);

  let panelView;
  switch (profile.panelView) {
    case 'panel':
      panelView = <ProfilePanel profile={profile.profile} />;
      break;
    case 'followers':
      panelView = (
        <FollowList
          type="Followers"
          users={profile.profile.influence.followers}
        />
      );
      break;
    case 'following':
      panelView = (
        <FollowList
          type="Following"
          users={profile.profile.influence.following}
        />
      );
      break;
    case 'editInfo':
      panelView = <UpdateInfoForm />;
      break;
    case 'editPassword':
      panelView = <UpdatePasswordForm />;
      break;
    case 'deleteAccount':
      panelView = <DeleteAccountForm />;
      break;
    default:
      panelView = <ProfilePanel profile={profile.profile} />;
      break;
  }

  return !profile.loading && profile.profile ? (
    <section id="profile" className="bg-light text-dark">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4">
            {profile.profile.user.name} <i className="far fa-address-card"></i>
          </h1>
          <button className="btn btn-primary mb-3 mb-md-5">
            <i className="fas fa-plus mr-2"></i>FOLLOW
          </button>
        </div>
        <div className="row">
          {panelView}
          <UserActivity />
        </div>
      </div>
    </section>
  ) : (
    <div className="spinner-border text-primary spinner-loader" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, { getProfile })(Profile);
