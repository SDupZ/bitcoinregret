import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OuterProgressBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  height: 2px;
  background-color: #E91E63;
  opacity: 0;
  transition: ${props => props.isLoading ? 'none' : 'opacity 500ms ease'},
  transition-delay: 500ms;
  opacity: ${props => props.isLoading ? '1' : 0}
`;

const InnerProgressBar = styled.div`
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  transform-origin: left;
  background-color: #FEFF07;
  width: ${props => props.width}%;
  transition: ${props => props.transition ? 'width 400ms linear' : 'none'},
`;


const initialState = {
  progress: 0,
  isLoading: false,
  transition: false,
};

const minStartProgress = 5;
const maxStartProgress = 25;

const maxLinearProgress = 75;

class LoadingBar extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState, { isLoading: props.isPageLoading || false });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Not currently loading, and loading should begin
    if (nextProps.isPageLoading && !this.props.isPageLoading) {
      clearInterval(this.linearIntervalId);

      this.setState({
        progress: parseInt((Math.random() * (maxStartProgress - minStartProgress)) + minStartProgress, 10),
        isLoading: true,
        transition: false,
      });

      this.linearIntervalId = setInterval(() => {
        const nextProgress = this.state.progress + 5;
        if (nextProgress > maxLinearProgress) {
          clearInterval(this.linearIntervalId);
        }
        this.setState({
          progress: nextProgress,
          transition: true,
        });
      }, 250);
    }

    // Currently loading and the loading should stop
    if (!nextProps.isPageLoading && this.props.isPageLoading) {
      clearInterval(this.linearIntervalId);

      this.setState({
        progress: 100,
        isLoading: false,
      });
    }
  }

  render() {
    const {
      progress,
      isLoading,
      transition,
    } = this.state;

    return (
      <OuterProgressBar isLoading={isLoading} transition={transition}>
        <InnerProgressBar width={progress} />
      </OuterProgressBar>
    );
  }
}

LoadingBar.propTypes = {
  isPageLoading: PropTypes.bool,
};

export default LoadingBar;
