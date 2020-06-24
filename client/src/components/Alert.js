import React from 'react';

const Alert = () => {
  const errorAlertIcon = <i class="fas fa-exclamation mr-2"></i>;
  return (
    <div id="alert" className="card bg-success text-light">
      <div className="card-body p-3">
        <div className="card-subtitle">
          <i className="far fa-check-circle mr-2"></i>Success
        </div>
        <hr className="my-1" />
        <div className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, qui?
        </div>
      </div>
    </div>
  );
};

export default Alert;
