import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from "react-datepicker";
import useIsMobile from 'hooks/useIsMobile';

import "react-datepicker/dist/react-datepicker.css";

import './datepicker.scss';

export default function DatePicker(props) {
  const { value, onChange, minDate, maxDate } = props;
  const isMobile = useIsMobile();

  return (
    <ReactDatePicker
      selected={value}
      onChange={(date) => onChange(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      minDate={minDate}
      maxDate={maxDate}
      dateFormat="yyyy/MM/dd"
      withPortal={isMobile ? true : undefined}
    />
  );
}

DatePicker.defaultProps = {
  initialDate: new Date(),

  // Can't select more the future or prior to when Bitcoin began.
  maxDate: new Date(),
  minDate: new Date('2010-07-17'),
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
}