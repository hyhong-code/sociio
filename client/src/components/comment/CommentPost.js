import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../../img/default.jpeg';

const CommentPost = () => {
  return (
    <div className="card border-dark mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Link to="profile" className="d-flex align-items-center">
            <img
              src={defaultImg}
              className="float-left rounded-circle d-block mr-3"
              width="50"
            />
            <div>
              <h5 className="card-title">John Doe</h5>
              <h6 className="card-subtitle mb-2 text-muted">@john-doe</h6>
            </div>
          </Link>
          <p className="text-muted ml-auto">
            <i className="fas fa-location-arrow"></i> Seattle
          </p>
        </div>
        <hr className="mt-1 mb-2" />
        <p className="card-text my-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          nesciunt. Soluta, error iure consectetur illum itaque aliquid, natus
          debitis repudiandae sunt magni dolorum, quis ipsum.
        </p>
        <div className="my-2 d-flex">
          <small className="text-muted">Wednesday, June 24, 2020</small>
          <span className="delete-post badge badge-danger ml-auto mr-1 text-light">
            X
          </span>
        </div>
        <div>
          <span className="ml-1 badge badge-secondary px-2 py-1">5 likes</span>
          <span className="ml-1 badge badge-primary px-2 py-1">3 comments</span>
        </div>
      </div>
    </div>
  );
};

export default CommentPost;
