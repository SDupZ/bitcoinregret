import React, {Component} from 'react'
import './styles.css'

import {updateAmount} from '../../../ducks/value'
import InputField from '../../generic/InputField';

class InitialInvestment extends Component {
  render() {
    return (
      <div className="initialInvestmentWrapper">
        <div className="input">$<InputField handleValueChange={updateAmount} value={(state) => state.value.initialInvestment}/></div>
      </div>
    )
  }
}

export default InitialInvestment