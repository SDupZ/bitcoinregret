import React from 'react';
import MOBILE from 'components/breakpoints';

const useIsMobile = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  }

  window.addEventListener('resize', updateWindowDimensions);

  return width <= MOBILE;
}

export default useIsMobile
