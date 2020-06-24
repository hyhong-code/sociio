import React from 'react';

const UserCommentedList = () => {
  return (
    <div className="card">
      <div className="card-header" id="headingThree">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
          >
            Comments <span className="badge badge-dark ml-1">20</span>
          </button>
        </h2>
      </div>
      <div id="collapseThree" className="collapse" data-parent="#accordion">
        <div className="card-body">
          <h1>CARDS IN HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCommentedList;
