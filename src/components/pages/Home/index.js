import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar';
import InputField from './components/InputField';
import ValueToday from './components/ValueToday';
import DatePicker from './components/DatePicker';

import useCalculateReturns from './useCalculateReturns';

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
  const [initialInvestmentText, setInitialInvestmentText] = React.useState(
    INITIAL_INVESTMENT_VALUE
  );
  const [investmentDate, setInvestmentDate] = React.useState(
    INITIAL_INVESTMENT_DATE
  );

  const initialInvestmentValue = Number(initialInvestmentText);

  const {
    investmentWorthToday,
    amountCryptoCurrency,
    percentageDifference,
  } = useCalculateReturns(initialInvestmentValue, investmentDate);

  const showResults = ![investmentWorthToday, amountCryptoCurrency, percentageDifference].some(e => e === undefined);

  const onChangeInitialInvestmentText = (value) => {
    setInitialInvestmentText(value);
  };

  return (
    <Layout>
      <LoadingBar />
      <Header />
      <Content>
        $
        {/* Investment Value */}
        <InputField
          value={`${initialInvestmentText}`}
          onChange={onChangeInitialInvestmentText}
        />

        invested on

        {/* Number of days ago */}
        {/* <InputField /> */}

        <DatePicker
          value={investmentDate}
          onChange={newDate => setInvestmentDate(newDate)}
        />
        {showResults && <ValueToday
          amountToday={investmentWorthToday}
          amountTodayInCrypto={amountCryptoCurrency}
          percentageIncrease={percentageDifference}
        />}
      </Content>
    </Layout>
  );
}
