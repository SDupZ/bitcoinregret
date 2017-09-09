import React, {Component} from 'react'
import './styles.css'

import InputField from '../../generic/InputField';
import {timeValueUpdated} from '../../../ducks/value'

class TimeAgo extends Component {
  render() {
    return (
      <div className="timeAgoWrapper">
        <div className="input">
          <InputField maxLength={5} handleValueChange={timeValueUpdated} value={(state) => state.value.timeValue} />   
        </div> 
        <span>days ago</span>        
      </div>
    )
  }
}

export default TimeAgo