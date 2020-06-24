import React from 'react';

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
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Profile;
