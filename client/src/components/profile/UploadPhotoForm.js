import React from 'react';

const UploadPhotoForm = () => {
  return (
    <div className="form-group py-4 border-bottom border-top">
      <label htmlFor="fileUpload" className="lead">
        Update profile photo
      </label>
      <input
        type="file"
        className="form-control-file mb-3 btn"
        id="fileUpload"
      />
      <input type="submit" value="Upload" className="btn btn-secondary px-4" />
    </div>
  );
};

export default UploadPhotoForm;
