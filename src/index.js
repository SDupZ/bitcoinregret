import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

import Home from './components/pages/Home';
import store from './store';

import './index.css';

ReactGA.initialize('UA-70937828-2');

const AppWithRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return true;
};

ReactDOM.render(
  <Provider store={store}>{logPageView() && <AppWithRoutes />}</Provider>,
  document.getElementById('root')
);
