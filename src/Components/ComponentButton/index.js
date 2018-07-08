import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentButton = ({ buttonName, onClick }) => (
    <button type="button" className={styles.Button} onClick={onClick}>
      {buttonName}
    </button>
);

ComponentButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
ComponentButton.defaultProps = {
  onClick() {},
};
export default ComponentButton;
