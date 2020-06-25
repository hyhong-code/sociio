import React from 'react';
import UserCommentedList from './UserCommentedList';
import UserPostsList from './UserPostsList';
import UserLikedList from './UserLikedList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  displayUserCommented,
  displayUserShared,
  displayUserLiked,
} from '../../actions/profileAction';

const UserActivity = ({
  profile,
  displayUserCommented,
  displayUserShared,
  displayUserLiked,
}) => {
  let view;
  switch (profile.activityView) {
    case 'commented':
      view = <UserCommentedList comments={profile.profile.comments} />;
      break;
    case 'liked':
      view = <UserLikedList likedPosts={profile.profile.likedPosts} />;
      break;
    case 'shared':
      view = <UserPostsList posts={profile.profile.posts} />;
      break;
    default:
      view = <UserCommentedList comments={profile.profile.comments} />;
      break;
  }

  return (
    <div className="col-md-8">
      <div className="pb-3 mb-1 border-bottom border-dark d-flex justify-content-around">
        <button
          onClick={displayUserCommented}
          className="btn btn-outline-primary"
        >
          Commented
        </button>
        <button
          onClick={displayUserLiked}
          className="btn btn-outline-secondary"
        >
          Liked
        </button>
        <button onClick={displayUserShared} className="btn btn-outline-dark">
          Shared
        </button>
      </div>
      {view}
    </div>
  );
};

UserActivity.propTypes = {
  profile: PropTypes.object.isRequired,
  displayUserCommented: PropTypes.func.isRequired,
  displayUserLiked: PropTypes.func.isRequired,
  displayUserShared: PropTypes.func.isRequired,
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, {
  displayUserCommented,
  displayUserShared,
  displayUserLiked,
})(UserActivity);
