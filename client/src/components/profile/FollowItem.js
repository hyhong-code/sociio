import React from 'react';
import { Link } from 'react-router-dom';

const FollowItem = () => {
  return (
    <Link to="/profile" className="list-group-item list-group-item-action px-3">
      <img
        src="./img/default.jpeg"
        width="25"
        alt=""
        className="img-fluid rounded-circle mr-2"
      />
      John Doe <small className="text-muted">@john-doe</small>
    </Link>
  );
};

export default FollowItem;
