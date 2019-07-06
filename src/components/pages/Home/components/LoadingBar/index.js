import React from 'react';
import LB from './LoadingBar';
import usePageLoading from 'hooks/usePageLoading';

const LoadingBar = (props) => {
  const { isLoading } = usePageLoading();

  return <LB isPageLoading={isLoading} {...props} />
};

export default LoadingBar;