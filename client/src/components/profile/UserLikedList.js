import React from 'react';
import Post from '../post/Post';

const UserLikedList = () => {
  return (
    <div className="profile-activities px-4">
      <p className="lead my-1">Liked Posts:</p>
      <Post />
    </div>
  );
};

export default UserLikedList;
