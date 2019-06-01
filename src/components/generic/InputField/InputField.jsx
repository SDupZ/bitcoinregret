import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      error: false
    };
  }

  componentDidMount() {
    const { requestFocus } = this.props;
    if (requestFocus) {
      this.input.focus();
    }
  }

  handleInputChange(evt) {
    const { handleValueChange } = this.props;
    const val = evt.target.value;
    if (Number.isNaN(Number(val))) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
    handleValueChange(val);
  }

  render() {
    const { value, maxLength } = this.props;
    const { error } = this.state;

    const size =
      value.toString().length - 3 <= 0 ? 1 : value.toString().length - 3;
    const width = (value.toString().length * 20).toString().concat('px');
    const style = { width };

    return (
      <div className="inputWrapper">
        <input
          type="text"
          onChange={this.handleInputChange}
          value={value}
          maxLength={maxLength}
          className={`inputField ${(error ? 'error' : '')}`}
          size={size}
          style={style}
          ref={input => {
            this.input = input;
          }}
        />
        <div className={`underLine ${(error ? 'error' : '')}`} />
      </div>
    );
  }
}

InputField.defaultProps = {
  requestFocus: false
};

InputField.propTypes = {
  requestFocus: PropTypes.bool,
  value: PropTypes.number.isRequired,
  handleValueChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
};
