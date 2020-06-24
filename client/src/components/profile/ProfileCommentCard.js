import React from 'react';
import defaultPic from '../../img/default.jpeg';
import { Link } from 'react-router-dom';

const ProfileCommentCard = () => {
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
        <p className="card-text mb-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          nesciunt.
        </p>
        <div className="my-2 d-flex">
          <small className="text-muted">Wednesday, June 24, 2020</small>
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
                  <h5 className="card-title">John Doe</h5>
                  <h6 className="card-subtitle text-muted">@john-doe</h6>
                </div>
              </Link>
            </div>
            <hr className="my-1" />
            <p className="card-text my-0">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium, nesciunt. Soluta, error iure consectetur illum itaque
              aliquid, natus debitis repudiandae sunt magni dolorum, quis ipsum.
            </p>
            <div className="d-flex">
              <small className="text-muted">Wednesday, June 24, 2020</small>
              <span className="delete-post badge badge-danger ml-auto mr-1 text-light">
                X
              </span>
            </div>

            <div className="mb-1 d-flex align-items-center">
              <span className="ml-1 badge badge-secondary px-2 py-1">
                5 likes
              </span>
              <span className="ml-1 badge badge-primary px-2 py-1">
                3 comments
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

export default ProfileCommentCard;
