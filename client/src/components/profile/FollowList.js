import React from 'react';
import FollowItem from './FollowItem';
import { connect } from 'react-redux';
import { displayProfilePanel } from '../../actions/profileAction';
import PropTypes from 'prop-types';

const FollowList = ({ type, users, displayProfilePanel }) => {
  console.log(users);
  return (
    <div className="col-md-4 mb-4 justify-content-center align-items-center py-5 rounded">
      <p className="lead text-center my-0">{type}</p>
      <button
        onClick={displayProfilePanel}
        className="btn btn-secondary d-block mx-auto my-3 px-4"
      >
        Back
      </button>
      <div className="list-group px-3">
        {users.map((user) => (
          <FollowItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

FollowList.propTypes = {
  type: PropTypes.string.isRequired,
  users: PropTypes.array,
  displayProfilePanel: PropTypes.func.isRequired,
};

export default connect(null, { displayProfilePanel })(FollowList);
