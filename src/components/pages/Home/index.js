import React from 'react';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar';
import InputField from './components/InputField';
import ValueToday from './components/ValueToday';
import DatePicker from './components/DatePicker/DatePicker';

import useCalculateReturns from './useCalculateReturns';
import calculateDaysBetweenTwoDates from './utils';

import {
  Layout,
  Content,
  SideBar,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from './home.styled';

const INITIAL_INVESTMENT_VALUE = 1000;
const INITIAL_INVESTMENT_DATE = new Date();

export default function Home() {
  const [initialInvestmentText, setInitialInvestmentText] = React.useState(
    INITIAL_INVESTMENT_VALUE
  );
  const [investmentDate, setInvestmentDate] = React.useState(
    INITIAL_INVESTMENT_DATE
  );
  const [daysAgoText, setDaysAgoText] = React.useState('0');

  const initialInvestmentValue = Number(initialInvestmentText);

  const {
    investmentWorthToday,
    amountCryptoCurrency,
    percentageDifference,
  } = useCalculateReturns(initialInvestmentValue, investmentDate);

  const showResults = ![investmentWorthToday, amountCryptoCurrency, percentageDifference].some(e => e === undefined);

  const handleInitialInvestmentDateChanged = (date) => {
    const daysAgo = calculateDaysBetweenTwoDates(new Date(), date);
    setInvestmentDate(date);
    setDaysAgoText(`${daysAgo}`);
  }

  const handleDaysAgoChanged = (value) => {
    const parsedNumber = Number(value);
    if (!Number.isNaN(parsedNumber)) {
      const daysAgo = Number.parseInt(parsedNumber)
      const newDate = new Date();
      newDate.setDate(newDate.getDate() - daysAgo);
      setInvestmentDate(newDate);
    }
    setDaysAgoText(value);
  }

  return (
    <Layout>
      <LoadingBar />
      <Header />
      <Content>
        $
        {/* Investment Value */}
        <InputField
          value={`${initialInvestmentText}`}
          onChange={(value) => setInitialInvestmentText(value)}
        />

        invested on

        {/* Date picker */}
        <DatePicker
          value={investmentDate}
          onChange={handleInitialInvestmentDateChanged}
        />

        {/* Value Today */}
        {showResults && <ValueToday
          amountToday={investmentWorthToday}
          amountTodayInCrypto={amountCryptoCurrency}
          percentageIncrease={percentageDifference}
        />}
      </Content>

      <SideBar>
        <SidebarHeader>Extra options</SidebarHeader>

        {/* Number of days ago */}
        <SidebarItem>
          <SidebarLabel>Number of days ago</SidebarLabel>
          <InputField
            value={daysAgoText}
            onChange={handleDaysAgoChanged}
          />
        </SidebarItem>

        {/* End date */}
        <SidebarItem>
          <SidebarLabel>End date</SidebarLabel>
          <DatePicker
            value={investmentDate}
            onChange={() => {}}
          />
        </SidebarItem>
      </SideBar>
    </Layout>
  );
}
