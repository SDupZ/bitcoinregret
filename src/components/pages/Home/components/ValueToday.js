import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  color: white;
  margin-top: 60px;
`;

const AmountWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`;

const AmountToday = styled.span`
  font-size: 6vw;

  @media only screen and (min-width: 600px) {
    font-size: 6vw;
  }
`;

const CurrencyQuantity = styled.span`
  position: absolute;
  transform: translateY(-100%);
  top: 0;

  @media only screen and (min-width: 600px) {
    transform: translateY(-100%);
  }
`;

const Currency = styled.span`
  .currency {
    position: absolute;
    transform: translate(-100%, 100%);
    bottom: 0;
  }
`;

const PercentageText = styled.span`
  display: block;
  text-align: center;
  font-size: 32px;
  margin-top: 24px;
  color: ${props => props.positiveIncrease ? '#0adc00' : '#dc0000'}

  @media only screen and (min-width: 600px) {
    font-size: 40px;
  }
`;

export default function ValueToday(props) {
  const { amountToday, percentageIncrease, amountTodayInCrypto} = props;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const formatAmountToday = (x) => {
    const formatted = Number(Number(x).toPrecision(4)).toFixed(2);
    return numberWithCommas(formatted);
  }

  const formatTwoDecimals = (x) => {
    const formatted = Number(x).toFixed(2);
    return numberWithCommas(formatted);
  }

  return (
    <Wrapper>
      <AmountWrapper>
        <CurrencyQuantity>{formatTwoDecimals(amountTodayInCrypto)} BTC=</CurrencyQuantity>
        <AmountToday>${formatAmountToday(amountToday)}</AmountToday>
        <Currency>USD</Currency>
      </AmountWrapper>
      <PercentageText>
        {formatTwoDecimals(percentageIncrease)}%
      </PercentageText>
    </Wrapper>
  )
}

ValueToday.propTypes = {
  amountToday: PropTypes.number.isRequired,
  percentageIncrease: PropTypes.number.isRequired,
  amountTodayInCrypto: PropTypes.number.isRequired,
}