import React, { Component } from 'react';
import logo from './btc-logo.svg';
import './App.css';
import {connect} from 'react-redux'

import InputField from '../../generic/InputField';
import SelectField from '../../generic/SelectField';
import AmountField from '../../unique/AmountField';
import AppLoading from '../../unique/meta/AppLoading';

import {updateAmount, timeValueUpdated, timeUnitUpdated, fetchCurrentExchangeRate} from '../../../ducks/value'

class App extends Component {
  componentDidMount() {
      this.props.fetchCurrentExchangeRate()
    }

  render() {   
    return (
      <div className="App">
        <AppLoading />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bitcoin Regret</h2>
        </div>        
        <p className="App-intro">Feelsbadman</p>
        <div className="Todo-App">
            If you have invested
            <InputField handleValueChange={updateAmount} value={(state) => state.value.initialInvestment}/>            
            <InputField handleValueChange={timeValueUpdated} value={(state) => state.value.timeValue} />
            <SelectField handleValueChange={timeUnitUpdated} value={(state) => state.value.timeUnit} />
            ago
            <AmountField />
          </div>
      </div>
    );
  }
}

export default connect((state) => ({}),
  {fetchCurrentExchangeRate}
)(App)
