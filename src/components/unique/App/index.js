import React, { Component } from 'react';

import './styles.css';
import {connect} from 'react-redux'
import AmountField from '../../unique/AmountField';
import InitialInvestment from '../../unique/InitialInvestment';
import TimeAgo from '../../unique/TimeAgo';
import DateField from '../../unique/DateField';
import AppLoading from '../../unique/meta/AppLoading';
import LoadingBar from 'components/molecules/LoadingBar';

import {fetchCurrentExchangeRate} from '../../../ducks/value'

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentExchangeRate();
  }

  render() {   
    return (
      <div className="c-app">
        <LoadingBar />

        <header className="c-header">
          <h2>Bitcoin Regret</h2>
        </header>

        <main className="c-content">
            <div className="c-amountContainer">
              <div className="c-amountInput"><InitialInvestment /></div>
              <p className="c-amountText">invested on</p>
              <DateField />
            </div>
            <div className="c-daysInput">
              <TimeAgo />
            </div>
            <AmountField />
        </main>

        <footer>
        </footer>
      </div>   
    );
  }
}

export default connect((state) => ({}),
  {fetchCurrentExchangeRate}
)(App)

