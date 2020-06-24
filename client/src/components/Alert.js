import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  const successDisplay = (
    <div className="card-subtitle">
      <i className="far fa-check-circle mr-2"></i> Success
    </div>
  );

  const errorDisplay = (
    <div className="card-subtitle">
      <i class="fas fa-exclamation mr-2"></i> Error
    </div>
  );

  return (
    <div className="div custom-alert p-1">
      {alert.length !== 0 &&
        alert.map((a) => (
          <div
            key={a.id}
            className={`${
              a.isError ? 'bg-danger' : 'bg-success'
            } card text-light mb-1`}
          >
            <div className="card-body p-3">
              {a.isError ? errorDisplay : successDisplay}
              <hr className="my-1" />
              <div className="card-text">{a.msg}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = ({ alert }) => ({ alert });
export default connect(mapStateToProps)(Alert);
