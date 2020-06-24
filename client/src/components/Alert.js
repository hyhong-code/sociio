import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  const errorDisplay = (
    <div className="card-subtitle">
      <i className="far fa-check-circle mr-2"></i> Success
    </div>
  );

  const successDisplay = (
    <div className="card-subtitle">
      <i class="fas fa-exclamation mr-2"></i> Error
    </div>
  );

  return (
    alert.length &&
    alert.map((a) => (
      <div
        key={a.id}
        className={`${
          a.isError ? 'bg-danger' : 'bg-success'
        } custom-alert card text-light`}
      >
        <div className="card-body p-3">
          {a.isError ? errorDisplay : successDisplay}
          <hr className="my-1" />
          <div className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            qui?
          </div>
        </div>
      </div>
    ))
  );
};

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = ({ alert }) => ({ alert });
export default connect(mapStateToProps)(Alert);
