import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker(props) {
  const { initialDate, minDate, maxDate } = props;
  const [date, setDate] = React.useState(initialDate)

  return (
    <ReactDatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      minDate={minDate}
      maxDate={maxDate}
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
  initialDate: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
}