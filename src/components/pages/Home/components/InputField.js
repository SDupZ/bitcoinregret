import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  background: rgba(1,1,1,0.2);
  border-radius: 4px;
`;

const Input = styled.input`
  color: white;
  border: none;
  background: none;
  padding: 10px;
  font-size: 32px;
  text-align: center;

  max-width: 250px;
  min-width: 20px;
  ${props => props.hasErrors && css`
    color: red;
  `}
`;

export default function InputField(props) {
  const { initialValue, onChange, focus, maxLength } = props;

  const [error, setError] = React.useState();
  const [value, setValue] = React.useState(initialValue);
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (focus) {
      inputRef.current && inputRef.current.focus();
    }
  }, [focus]);

  const handleOnChange = (evt) => {
    const val = evt.target.value;

    // // Do some logic (Probably shouldn't be in here)
    if (Number.isNaN(Number(val))) {
      setError('Input must be a number');
    } else {
      setError(null)
    }

    // Internal state
    setValue(val);

    // Notify consumers
    onChange && onChange(val);
  }

  const size = value.toString().length - 3 <= 0 ? 1 : value.toString().length - 3;
  const width = (value.toString().length * 20).toString().concat('px');
  const style = { width };

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={handleOnChange}
        value={value}
        maxLength={maxLength}
        className={`inputField ${(error ? 'error' : '')}`}
        size={size}
        style={style}
        ref={inputRef}
        hasErrors={!!error}
      />
    </Wrapper>
  );
}

InputField.defaultProps = {
  focus: false,
  maxLength: Infinity,
  initialValue: '',
};

InputField.propTypes = {
  focus: PropTypes.bool,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
};
