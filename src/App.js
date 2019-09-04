import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from  'components/pages/Home';
import PrivacyPolicy from  'components/pages/PrivacyPolicy';

export const LoadingContext = React.createContext();

const App = () => {
  const [isLoading, setLoading] = React.useState(false);
  const { current: promisesRemaining } = React.useRef([]);


  const value = React.useMemo(() => {
    return {
      promisesRemaining,
      isLoading,
      setLoading,
    };
  }, [isLoading, setLoading]);
  
  return (
    <Router>
      <Switch>
        <LoadingContext.Provider value={value}>
          <Route exact path="/" component={Home} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </LoadingContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
