import React from 'react';

const UserLikedList = () => {
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
          >
            Liked Posts <span className="badge badge-dark ml-1">10</span>
          </button>
        </h2>
      </div>
      <div id="collapseTwo" className="collapse" data-parent="#accordion">
        <div className="card-body">
          <h1>CARDS IN HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default UserLikedList;
