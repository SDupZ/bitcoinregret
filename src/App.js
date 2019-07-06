import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from  'components/pages/Home';

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
          <Route path="/" component={Home} />
        </LoadingContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
