import React from 'react';
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
    this.handleFocus = this.handleFocus.bind(this);

    this.state = {
      calendarOpen: false,
    };
  }

  handleChange(date) {
    this.dateTimeDOM.blur();
    this.props.handleValueChange(date);
  }

  handleBlur() {
    this.setState({ ...this.state, calendarOpen: false});
  }

  handleFocus() {
    this.setState({ ...this.state, calendarOpen: true });
  }

  render() {
    DateTime.prototype.componentWillReceiveProps = function (nextProps) {
      if (this.props.open !== nextProps.open) {
        this.setState({ open: nextProps.open });
      }
    };

    const isValid = (current) => {
      const today = moment();
      return (current.isBefore(today));
    };

    return (
      <div className=".rdtWrapper">
        <div 
          className='c-datefield__wrapper' 
          tabIndex={"0"} 
          onFocus={this.handleFocus} 
          onBlur={this.handleBlur}
          ref={(dateTimeDOM) => { this.dateTimeDOM = dateTimeDOM; }}
          >
          <span className='c-datefield__day'>{this.props.day}</span>
          <span className='c-datefield__month'>{this.props.month}</span>
          <div className='c-datefield__year'>{this.props.year}</div>
          <DateTime
            open={this.state.calendarOpen}
            onChange={this.handleChange}
            timeFormat={false}
            input={false}
            isValidDate={isValid}
          />
        </div>
      </div >
    )
  }
}

export default DateField