import React, {Component} from 'react';
import './styles.css';
import {MdDateRange} from 'react-icons/lib/md';

import InputField from '../../generic/InputField';
import SelectField from '../../generic/SelectField';
import {timeValueUpdated, timeUnitUpdated} from '../../../ducks/value'

class DateField extends Component {
  render() {
    return (
      <div className="dateFieldWrapper">
        <div className="input">
          <span className='day'>12</span>    
          <span className='month'>August</span>
          <div className='year'>2016</div>  
        </div>     
      </div>
    )
  }
}

export default DateField