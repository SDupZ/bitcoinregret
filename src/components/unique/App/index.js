import React, { Component } from 'react';
import logo from './btc-logo.svg';
import './App.css';

import InputField from '../../generic/InputField';
import SelectField from '../../generic/SelectField';
import AmountField from '../../unique/AmountField';

import {updateAmount, timeValueUpdated, timeUnitUpdated} from '../../../ducks/value'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bitcoin Regret</h2>
        </div>
        <p className="App-intro">Feelsbadman</p>
        <div className="Todo-App">
            If you have invested
            <InputField handleValueChange={updateAmount} val='initialInvestment'/>            
            <InputField handleValueChange={timeValueUpdated} val='timeValue' />
            <SelectField handleValueChange={timeUnitUpdated} val="timeUnit"/>
            ago
            <AmountField />
          </div>
      </div>
    );
  }
}

export default App;
