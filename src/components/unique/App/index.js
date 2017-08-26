import React, { Component } from 'react';
import logo from './btc-logo.svg';
import './styles.css';
import {connect} from 'react-redux'

import AmountField from '../../unique/AmountField';
import InitialInvestment from '../../unique/InitialInvestment';
import TimeAgo from '../../unique/TimeAgo';
import AppLoading from '../../unique/meta/AppLoading';

import {fetchCurrentExchangeRate} from '../../../ducks/value'

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
        <div>
            <InitialInvestment />
            <TimeAgo />   
                   
            <div>is now worth: </div>
            <AmountField />
          </div>
      </div>
    );
  }
}

export default connect((state) => ({}),
  {fetchCurrentExchangeRate}
)(App)
