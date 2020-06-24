import React from 'react';
import defaultImg from '../../img/default.jpeg';
import { Link } from 'react-router-dom';

const CommentCard = () => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <Link to="/profile" className="d-flex align-items-center">
            <img
              src={defaultImg}
              alt="profilePic"
              className="float-left rounded-circle d-block mr-3"
              width="50"
            />
            <div>
              <h5 className="card-title">John Doe</h5>
              <h6 className="card-subtitle mb-2 text-muted">@john-doe</h6>
            </div>
          </Link>
        </div>
        <hr className="mt-0 mb-1" />
        <p className="card-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          nesciunt.
        </p>
        <div className="my-2 d-flex">
          <small className="text-muted">Wednesday, June 24, 2020</small>
          <span className="delete-post badge badge-danger ml-auto mr-1 text-light">
            X
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
