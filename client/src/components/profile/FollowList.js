import React from 'react';
import FollowItem from './FollowItem';

const FollowList = () => {
  return (
    <div className="col-md-4 mb-4 justify-content-center align-items-center py-5 rounded">
      <p className="lead text-center my-0">FOLLOWERS</p>
      <button className="btn btn-secondary d-block mx-auto my-3 px-4">
        Back
      </button>
      <div className="list-group px-3">
        <FollowItem />
      </div>
    </div>
  );
};

export default FollowList;
