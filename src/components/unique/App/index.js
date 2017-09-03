import React, { Component } from 'react';
import './styles.css';
import {connect} from 'react-redux'
import AmountField from '../../unique/AmountField';
import InitialInvestment from '../../unique/InitialInvestment';
import TimeAgo from '../../unique/TimeAgo';
import DateField from '../../unique/DateField';
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
          <h2>Bitcoin Regret</h2>
        </div>        
        <div>
            <InitialInvestment />
            invested
            <TimeAgo />       
            <div>on</div>
            <DateField />           
            <AmountField />
          </div>
      </div>
    );
  }
}

export default connect((state) => ({}),
  {fetchCurrentExchangeRate}
)(App)

