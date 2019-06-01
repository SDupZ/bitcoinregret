import React from 'react';

const OuterProgressBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  height: 2px;
  background-color: #E91E63;
  opacity: 0;
  transition: opacity 250ms ease;
  transition-delay: 500ms;
  opacity: ${props.isLoading ? '1' : 0}
`;

const InnerProgressBar = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  transform-origin: left;
  background-color: #FEFF07;
  width: ${props => props.width};
  transition: 'width 400ms linear';
`;

export default function LoadingBar(props) {
  const [isLoading, setLoading] = React.useState(true);
  const [progress, setWidth] = React.useState(100);
  
  return (
    <OuterProgressBar isLoading={isLoading}>
      <InnerProgressBar width={progress} isLoading={isLoading} />
    </OuterProgressBar>
  )
}