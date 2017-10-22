import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './components/unique/App';
import SiteVerification from './components/unique/SiteVerification'
import store from './store'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-70937828-2');

const AppWithRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/googlee75a16594c6a3a19.html" component={SiteVerification} />
            <Route path="/" component={App} />
        </Switch>
    </Router>
)

const logPageView = () => {
    ReactGA.set({page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
    return true;
}

ReactDOM.render(
    <Provider store={store}>
        {logPageView() && <AppWithRoutes />}
    </Provider>,
    document.getElementById('root'));

