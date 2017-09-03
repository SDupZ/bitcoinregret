import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styles.css';
import 'react-datepicker/dist/react-datepicker.css';

class DateField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.handleValueChange(date);
  }

  render() {
    const wrapper = (
      <div>
        <div className="dateFieldWrapper" onClick={this.toggleCalendar}>
          <div className="input">
            <span className='day'>{this.props.day}</span>
            <span className='month'>{this.props.month}</span>
            <div className='year'>{this.props.year}</div>
          </div>
        </div>
      </div >
    )
    return (
      <DatePicker
        customInput={wrapper}
        onChange={this.handleChange} />
    )
  }
}

export default DateField