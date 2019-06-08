import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function SelectField(props) {
  const { value, handleValueChange } = props;

  const handleSelected = evt => {
    const val = evt.target.value;
    handleValueChange(val);
  };

  return (
    <select
      value={value}
      onChange={handleSelected}
      className="selectTimeUnitWrapper"
    >
      <option value="day">days</option>
      <option value="month">months</option>
      <option value="year">years</option>
    </select>
  );
}

SelectField.propTypes = {
  handleValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};
