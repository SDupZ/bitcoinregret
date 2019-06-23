import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MOBILE from 'components/breakpoints';

const Wrapper = styled.div`
  color: white;
`;

const AmountWrapper = styled.div`
  position: relative;
`;

const AmountToday = styled.span`
  font-size: 6vw;

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
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formatAmountToday = (x) => {
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
        <CurrencyQuantity>{formatDecimals(amountTodayInCrypto, 0)} BTC=</CurrencyQuantity>
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