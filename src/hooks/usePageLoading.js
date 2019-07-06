import React from 'react';

import { LoadingContext } from 'App';

const usePageLoading = () => {
  const { isLoading, setLoading, promisesRemaining } = React.useContext(LoadingContext);

  const addPromise = (promise) => {
    const requestId = (new Date()).getTime();
    setLoading(true);
    promisesRemaining.push(requestId);

    return Promise.resolve(promise).then(completePromise(requestId), completePromise(requestId));
  };

  const completePromise = id => result => {
    const idx = promisesRemaining.indexOf(id);
    if (idx !== -1) {
      promisesRemaining.splice(idx, 1)
    }

    if (promisesRemaining.length <= 0) {
      setLoading(false);
    }

    return result;
  };

  return {
    addPromise,
    isLoading,
  }
};

export default usePageLoading;
