import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import Home from  'components/pages/Home';

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
  logPageView() && <AppWithRoutes />,
  document.getElementById('root')
);
