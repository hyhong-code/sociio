import React from 'react';
import UserCommentedList from './UserCommentedList';
import UserPostsList from './UserPostsList';
import UserLikedList from './UserLikedList';

const UserActivity = () => {
  return (
    <div className="col-md-8">
      <div className="pb-3 mb-1 border-bottom border-dark d-flex justify-content-around">
        <button className="btn btn-outline-primary">Commented</button>
        <button className="btn btn-outline-secondary">Liked</button>
        <button className="btn btn-outline-dark">Shared</button>
      </div>
      <UserCommentedList />
    </div>
  );
};

export default UserActivity;
