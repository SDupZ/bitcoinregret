import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import MOBILE from 'components/breakpoints';
import useIsMobile from 'hooks/useIsMobile';

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
  padding: 8px 10px;
  font-size: 32px;
  text-align: center;

  max-width: 250px;
  min-width: 20px;
  ${props => props.hasErrors && css`
    color: red;
  `}

  @media only screen and (max-width: ${MOBILE}px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default function InputField(props) {
  const { onChange, focus, maxLength, value } = props;
  const [error, setError] = React.useState();
  const inputRef = React.useRef();
  const isMobile = useIsMobile();

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

    onChange(val);
  }

  const size = value.toString().length - 3 <= 0 ? 1 : value.toString().length - 3;
  const width = isMobile ? undefined : (value.toString().length * 40).toString().concat('px');
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
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  focus: PropTypes.bool,
  maxLength: PropTypes.number,
};
