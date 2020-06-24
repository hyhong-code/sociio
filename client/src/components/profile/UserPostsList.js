import React from 'react';
import Post from '../post/Post';

const UserPostsList = () => {
  return (
    <div className="profile-activities px-4">
      <p className="lead my-1">Shared Posts:</p>
      <Post />
    </div>
  );
};

export default UserPostsList;
