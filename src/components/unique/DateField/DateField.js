import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styles.css';

import 'react-datetime/css/react-datetime.css';
import DateTime from 'react-datetime';
class DateField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.state = {
      calendarOpen: false,
    };
  }

  handleChange(date) {
    this.setState({ ...this.state, calendarOpen: !this.state.calendarOpen });
    this.props.handleValueChange(date);
  }

  toggleCalendar() {
    this.setState({...this.state, calendarOpen: !this.state.calendarOpen});
  }

  render() {
    const calendar = this.state.calendarOpen && (
      <DateTime
        onChange={this.handleChange}
        input={false}
        closeOnSelect={true} />
    );
    return (
      <div className=".rdtWrapper">
        <div className='c-datefield__wrapper' onClick={this.toggleCalendar}>
          <span className='c-datefield__day'>{this.props.day}</span>
          <span className='c-datefield__month'>{this.props.month}</span>
          <div className='c-datefield__year'>{this.props.year}</div>
        </div>
        {calendar}
      </div >
    )
  }
}

export default DateField