import React from 'react';

const PostForm = () => {
  return (
    <form className="bg-primary rounded p-3">
      <div className="input-group">
        <textarea
          rows="3"
          className="form-control"
          placeholder="Share your thoughts with the world..."
        ></textarea>
        <div className="input-group-append">
          <input
            className="btn btn-outline-light"
            type="button"
            value="Share"
          />
          <button className="btn btn-outline-light" type="button">
            <i className="fas fa-location-arrow"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
