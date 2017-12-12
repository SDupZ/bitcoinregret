import React, {Component} from 'react'
import moment from 'moment';
import './styles.css'

import InputField from '../../generic/InputField';
import {timeValueUpdated} from '../../../ducks/value'

class TimeAgo extends Component {

  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(val) {
    this.props.handleValueChange(timeValueUpdated(val));
  }

  render() {
    return (
      <div className="timeAgoWrapper">
        <div className="input">
          <InputField maxLength={5} handleValueChange={this.handleValueChange} value={(state) => state.value.timeValue} />   
        </div>
        <p className="daysText">days ago</p>  
      </div>
    )
  }
}

export default TimeAgo