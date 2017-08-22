import React, { Component } from 'react';
import logo from './btc-logo.svg';
import './App.css';

import InputField from '../../generic/InputField';
import AmountField from '../../unique/AmountField';

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
            <InputField />
            <AmountField />
          </div>
      </div>
    );
  }
}

export default App;
