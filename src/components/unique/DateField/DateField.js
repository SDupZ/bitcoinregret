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
        <div className='c-datefield__wrapper' onClick={this.toggleCalendar}>
          <span className='c-datefield__day'>{this.props.day}</span>
          <span className='c-datefield__month'>{this.props.month}</span>
          <div className='c-datefield__year'>{this.props.year}</div>
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