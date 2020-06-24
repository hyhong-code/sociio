import React from 'react';
import ProfilePanel from '../components/profile/ProfilePanel';
import UserActivity from '../components/profile/UserActivity';
import FollowList from '../components/profile/FollowList';
import UpdateInfoForm from '../components/profile/UpdateInfoForm';
import UpdatePasswordForm from '../components/profile/UpdatePasswordForm';
import DeleteAccountForm from '../components/profile/DeleteAccountForm';

const Profile = () => {
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
          <ProfilePanel />
          {/* <FollowList/> */}
          {/* <UpdateInfoForm /> */}
          {/* <UpdatePasswordForm/> */}
          {/* <DeleteAccountForm /> */}
          <UserActivity />
        </div>
      </div>
    </section>
  );
};

export default Profile;
