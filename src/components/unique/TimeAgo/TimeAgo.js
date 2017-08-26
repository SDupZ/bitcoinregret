import React, {Component} from 'react'
import './styles.css'

import InputField from '../../generic/InputField';
import SelectField from '../../generic/SelectField';
import {timeValueUpdated, timeUnitUpdated} from '../../../ducks/value'

class TimeAgo extends Component {
  render() {
    return (
      <div className="timeAgoWrapper">
        <div>How long ago?</div>
        <div className="input">
          <InputField handleValueChange={timeValueUpdated} value={(state) => state.value.timeValue} />
          <SelectField handleValueChange={timeUnitUpdated} value={(state) => state.value.timeUnit} />           
        </div>     
        <span>ago</span>   
      </div>
    )
  }
}

export default TimeAgo