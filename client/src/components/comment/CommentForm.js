import React from 'react';

const CommentForm = () => {
  return (
    <form className="bg-primary rounded p-3">
      <div className="input-group">
        <textarea
          rows="3"
          className="form-control"
          placeholder="What do you think?"
        ></textarea>
        <div className="input-group-append">
          <input
            className="btn btn-outline-light"
            type="button"
            value="Comment"
          />
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
