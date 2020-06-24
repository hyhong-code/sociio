import React from 'react';

const UserPostsList = () => {
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <button
            className="btn btn-link btn-block text-left text-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
          >
            Shared Posts <span className="badge badge-dark ml-1">20</span>
          </button>
        </h2>
      </div>

      <div id="collapseOne" className="collapse show" data-parent="#accordion">
        <div className="card-body">
          <h1>CARDS IN HERE</h1>
        </div>
      </div>
    </div>
  );
};

export default UserPostsList;
