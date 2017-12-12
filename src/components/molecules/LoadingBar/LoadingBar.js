import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import './style.css';

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

  componentWillReceiveProps(nextProps) {
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
      <div
        className={classNames({
          'progressBar': true,
          'progressBarLoading': isLoading,
          'progressBarLoadingTransition': transition,
        })}
      >
        <div
          className={'progressBarInner'}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    );
  }
}

LoadingBar.propTypes = {
  isPageLoading: PropTypes.bool,
};

export default LoadingBar;