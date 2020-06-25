import React from 'react';
import ProfileCommentCard from './ProfileCommentCard';
import PropTypes from 'prop-types';

const UserCommentedList = ({ comments }) => {
  return (
    <div className="profile-activities px-4">
      <p className="lead my-1">Commented Posts:</p>
      {comments.map((comment) => (
        <ProfileCommentCard key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

UserCommentedList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default UserCommentedList;
