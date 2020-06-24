import React from 'react';
import UserPostsList from './UserPostsList';
import UserLikedList from './UserLikedList';
import UserCommentedList from './UserCommentedList';

const UserActivity = () => {
  return (
    <div class="col-md-8">
      <div class="accordion" id="accordion">
        <UserPostsList />
        <UserLikedList />
        <UserCommentedList />
      </div>
    </div>
  );
};

export default UserActivity;
