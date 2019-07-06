import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './App';

import './index.css';

// const GA_KEY = 'UA-70937828-2';
// TODO
const GA_KEY = undefined;

ReactGA.initialize(GA_KEY);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return true;
};

ReactDOM.render(
  logPageView() && <App />,
  document.getElementById('root')
);
