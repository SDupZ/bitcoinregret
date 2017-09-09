import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styles.css';
import './calendarStyles.css';

import 'react-datetime/css/react-datetime.css';
import DateTime from 'react-datetime';
class DateField extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.state = {
      calendarOpen: false,
    };
  }

  handleChange(date) {
    this.setState({ ...this.state, calendarOpen: !this.state.calendarOpen });
    this.props.handleValueChange(date);
  }

  handleBlur() {
    this.setState({ ...this.state, calendarOpen: false });
  }

  toggleCalendar() {
    this.setState({...this.state, calendarOpen: !this.state.calendarOpen});
  }

  render() {
    this.state.calendarOpen
    DateTime.prototype.componentWillReceiveProps = function (nextProps) {
      if (this.props.open !== nextProps.open) {
        this.setState({ open: nextProps.open });
      }
    };
    const calendar =  true && (
      <DateTime
        open={this.state.calendarOpen}
        onChange={this.handleChange}
        timeFormat={false}
        input={false}
        closeOnSelect={true} />
    );
    return (
      <div className=".rdtWrapper">
        <div className='c-datefield__wrapper' onClick={this.toggleCalendar} tabIndex={1} onBlur={this.handleBlur}>
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