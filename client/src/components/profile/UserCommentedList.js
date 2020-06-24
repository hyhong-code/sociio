import React from 'react';
import ProfileCommentCard from './ProfileCommentCard';

const UserCommentedList = () => {
  return (
    <div className="profile-activities px-4">
      <p className="lead my-1">Commented Posts:</p>
      <ProfileCommentCard />
    </div>
  );
};

export default UserCommentedList;
