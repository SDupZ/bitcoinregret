import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MOBILE from 'components/breakpoints';
import largeNumbers from './largeNumbers.json';

const Wrapper = styled.div`
  color: white;
`;

const AmountWrapper = styled.div`
  position: relative;
`;

const AmountToday = styled.span`
  font-size: 90px;

  @media only screen and (max-width: ${MOBILE}px) {
    font-size: 42px;
  }
`;

const CurrencyQuantity = styled.span`
  position: absolute;
  transform: translateY(-100%);
  top: 0;

  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

const Currency = styled.span`
  position: absolute;
  transform: translate(-100%, 100%);
  bottom: 0;

  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

const PercentageText = styled.span`
  display: block;
  text-align: center;
  font-size: 32px;
  margin-top: 24px;
  color: ${props => props.positiveIncrease ? '#0adc00' : '#dc0000'}

  @media only screen and (max-width: ${MOBILE}px) {
    font-size: 24px;
    margin-top: 4px;
  }
`;

export default function ValueToday(props) {
  const { amountToday, percentageIncrease, amountTodayInCrypto} = props;

  const numberWithCommas = (x) => {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const formatAmountToday = (x) => {
    const numberOfDigits = new Number(x).toFixed(0).toString().length;

    if (numberOfDigits > 6) {
      // E.g. 1.2 million
      const wordRepresentation = largeNumbers[numberOfDigits - 1];
      const numberRepresentation = Number(x / Math.pow(10, numberOfDigits - 1)).toFixed(2);

      return `${numberRepresentation} ${wordRepresentation.toString().toLowerCase()}`
    }

    const formatted = Number(Number(x).toPrecision(4)).toFixed(0);
    return numberWithCommas(formatted);
  }

  const formatDecimals = (x, decimals) => {
    const formatted = Number(x).toFixed(decimals);
    return numberWithCommas(formatted);
  }

  return (
    <Wrapper>
      <AmountWrapper>
        <CurrencyQuantity>{formatDecimals(amountTodayInCrypto, 4)} BTC=</CurrencyQuantity>
        <AmountToday>${formatAmountToday(amountToday)}</AmountToday>
        <Currency>USD</Currency>
      </AmountWrapper>
      <PercentageText positiveIncrease={percentageIncrease >= 0}>
        {formatDecimals(percentageIncrease, 2)}%
      </PercentageText>
    </Wrapper>
  )
}

ValueToday.propTypes = {
  amountToday: PropTypes.number.isRequired,
  percentageIncrease: PropTypes.number.isRequired,
  amountTodayInCrypto: PropTypes.number.isRequired,
}