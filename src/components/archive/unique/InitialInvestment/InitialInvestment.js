import React, {Component} from 'react'
import './styles.css'

import {updateAmount} from '../../../../ducks/value'
import InputField from '../../generic/InputField';

class InitialInvestment extends Component {

  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(val) {
    this.props.handleValueChange(updateAmount(val));
  }

  render() {
    return (
      <div className="initialInvestmentWrapper">
      <p className="c-dollar">$</p>
      <InputField 
        handleValueChange={this.handleValueChange} 
        value={(state) => state.value.initialInvestment}
        requestFocus={true}/>
      </div>
    )
  }
}

export default InitialInvestment