import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar';
import InputField from './components/InputField';
import ValueToday from './components/ValueToday';
import DatePicker from './components/DatePicker';

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #18232e;
  color: white;

  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    'grid-header'
    'grid-content'
    'grid-footer';
`;

const Content = styled.div`
  grid-area: grid-content;
  text-align: center;
`;

const INITIAL_INVESTMENT_VALUE = 1000;
const INITIAL_INVESTMENT_DATE = new Date();

export default function Home() {
  const [initialInvestmentValue, setInitialInvestmentValue] = React.useState(
    INITIAL_INVESTMENT_VALUE
  );
  const [investmentDate, setInvestmentDate] = React.useState(
    INITIAL_INVESTMENT_DATE
  );

  React.useEffect(() => {
    console.log('I should fetch the current exchange rate');
  }, []);

  const calculateReturns = () => {
    // 1) Find the exchange rate of USD to crypotocurrency on the given date.
    // E.g. 400: 400usd = 1 bitcoin
    const historicalExchangeRate = 400;

    // 2) Calculate how much of the Cryptocurrecy I had on the given date.
    // E.g If I bought $100 bitcoin in 2010 I had 10 Bitcoin
    const amountCryptoCurrency = initialInvestmentValue * (1 / historicalExchangeRate);

    // 3) Fetch the current exchange rate of the cryptocurrency
    const currentExchangeRate = 20000;

    // 4) Calculate how much that amount is worth today
    const investmentWorthToday = amountCryptoCurrency * currentExchangeRate;

    const percentageDifference =
      ((investmentWorthToday - initialInvestmentValue) /
        initialInvestmentValue) *
      100;

    return {
      investmentWorthToday,
      amountCryptoCurrency,
      percentageDifference
    };
  };

  const {
    investmentWorthToday,
    amountCryptoCurrency,
    percentageDifference,
  } = calculateReturns();

  return (
    <Layout>
      <LoadingBar />
      <Header />
      <Content>
        {/* Investment Value */}
        <InputField
          value={`${initialInvestmentValue}`}
          onChange={value => setInitialInvestmentValue(value)}
        />

        {/* Number of days ago */}
        {/* <InputField /> */}

        <DatePicker
          selected={investmentDate}
          onChange={newDate => setInvestmentDate(newDate)}
        />
        <ValueToday
          amountToday={investmentWorthToday}
          amountTodayInCrypto={amountCryptoCurrency}
          percentageIncrease={percentageDifference}
        />
      </Content>
    </Layout>
  );
}
