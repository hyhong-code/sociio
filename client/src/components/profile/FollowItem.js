import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultPic from '../../img/default.jpeg';

const FollowItem = ({ user }) => {
  console.log(user);
  return (
    <Link
      to="/profile/3433"
      className="list-group-item list-group-item-action px-3"
    >
      <img
        src={defaultPic}
        width="25"
        alt=""
        className="img-fluid rounded-circle mr-2"
      />
      {user.name} <small className="text-muted">@{user.handle}</small>
    </Link>
  );
};

FollowItem.propTypes = {
  users: PropTypes.array.isRequired,
};

export default FollowItem;
