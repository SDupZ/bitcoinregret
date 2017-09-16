import React, {Component} from 'react'
import './styles.css'

import {updateAmount} from '../../../ducks/value'
import InputField from '../../generic/InputField';

class InitialInvestment extends Component {
  render() {
    return (
      <div className="initialInvestmentWrapper">
      <p className="c-dollar">$</p>
      <InputField 
        handleValueChange={updateAmount} 
        value={(state) => state.value.initialInvestment}
        requestFocus={true}/>
      </div>
    )
  }
}

export default InitialInvestment