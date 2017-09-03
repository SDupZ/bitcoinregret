import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styles.css';

import 'react-datepicker/dist/react-datepicker.css';

class DateField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      isOpen: false,
      day: props.day,
      month: props.month,
      year: props.year,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ startDate: date });
    console.log("Date changed");
  }

  render() {
    const wrapper = (
      <div>
        <div className="dateFieldWrapper" onClick={this.toggleCalendar}>
          <div className="input">
            <span className='day'>{this.state.day}</span>
            <span className='month'>{this.state.month}</span>
            <div className='year'>{this.state.year}</div>
          </div>
        </div>
      </div >
    )
    return (
      <DatePicker
        customInput={wrapper}
        selected={this.state.startDate}
        onChange={this.handleChange} />
    )
  }
}

export default DateField