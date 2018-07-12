import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentButton = ({ buttonName, onClick, disabled }) => (
  <button type="button" className={styles.Button} onClick={onClick} disabled={disabled}>
    {buttonName}
  </button>
);

ComponentButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
ComponentButton.defaultProps = {
  disabled: false,
};
export default ComponentButton;
