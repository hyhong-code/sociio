import React from 'react';
import defaultPic from '../../img/default.jpeg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileCommentCard = ({ comment }) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-body p-3">
        <div className="d-flex align-items-center">
          <Link to="/profile" className="d-flex align-items-center">
            <h5 className="card-title mb-0">John Doe</h5>
            <h6 className="card-subtitle ml-2 text-muted">@john-doe</h6>
          </Link>
        </div>
        <hr className="mt-0 mb-1" />
        <p className="card-text mb-0">{comment.text}</p>
        <div className="my-2 d-flex">
          <small className="text-muted">{comment.commentedAt}</small>
          <span className="delete-post badge badge-danger ml-auto mr-1 text-light">
            X
          </span>
        </div>
        <hr className="my-0" />

        <div className="card border-dark mb-3">
          <div className="card-body p-2">
            <div className="d-flex align-items-center">
              <Link to="/profile" className="d-flex align-items-center">
                <img
                  src={defaultPic}
                  className="float-left rounded-circle d-block mr-3"
                  width="50"
                  alt="profilePic"
                />
                <div>
                  <h5 className="card-title">{comment.post.postedBy.name}</h5>
                  <h6 className="card-subtitle text-muted">
                    @{comment.post.postedBy.handle}
                  </h6>
                </div>
              </Link>
            </div>
            <hr className="my-1" />
            <p className="card-text my-0">{comment.post.text}</p>
            <div className="d-flex">
              <small className="text-muted">{comment.post.postedAt}</small>
              <span className="delete-post badge badge-danger ml-auto mr-1 text-light">
                X
              </span>
            </div>

            <div className="mb-1 d-flex align-items-center">
              <span className="ml-1 badge badge-secondary px-2 py-1">
                {comment.post.numLikes} likes
              </span>
              <span className="ml-1 badge badge-primary px-2 py-1">
                {comment.post.numComments} comments
              </span>
              <Link
                to="/comment"
                className="btn btn-outline-info mt-1 btn-sm ml-auto"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default ProfileCommentCard;
