import React, { Component } from 'react';
import {connect} from 'react-redux'
import AmountField from 'components/unique/AmountField';
import InitialInvestment from 'components/unique/InitialInvestment';
import TimeAgo from 'components/unique/TimeAgo';
import DateField from 'components/unique/DateField';
import LoadingBar from 'components/molecules/LoadingBar';

import Header from './Header';

import { fetchCurrentExchangeRate } from '../../../ducks/value'

import './styles.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentExchangeRate();
  }

  render() {   
    return (
      <div className="c-app">
        <LoadingBar />
        <Header />

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

