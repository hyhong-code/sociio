import React, { useEffect, useState } from 'react';
import ProfilePanel from '../components/profile/ProfilePanel';
import UserActivity from '../components/profile/UserActivity';
import FollowList from '../components/profile/FollowList';
import UpdateInfoForm from '../components/profile/UpdateInfoForm';
import UpdatePasswordForm from '../components/profile/UpdatePasswordForm';
import DeleteAccountForm from '../components/profile/DeleteAccountForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Profile = ({ profile }) => {
  let panelView;
  switch (profile.panelView) {
    case 'panel':
      panelView = <ProfilePanel />;
      break;
    case 'followers':
      panelView = <FollowList />;
      break;
    case 'following':
      panelView = <FollowList />;
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
      panelView = <ProfilePanel />;
      break;
  }

  return (
    <section id="profile" className="bg-light text-dark">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4">
            JOHN DOE <i className="far fa-address-card"></i>
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
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(Profile);
