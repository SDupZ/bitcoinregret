import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './components/unique/App';
import store from './store'

import ReactGA from 'react-ga';
ReactGA.initialize('UA-70937828-2');

const logPageView = () => {
    ReactGA.set({page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
    return true;
}

ReactDOM.render(
    <Provider store={store}>
        {logPageView() && <App />}
    </Provider>,
    document.getElementById('root'));

