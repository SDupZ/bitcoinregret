import React from 'react';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar/index';
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
  Label,
  InvestmentValue,
  VerticalStack,
  Row,
  DateRow,
  NowWorth,
  DaysAgo,
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
        <Row>
          {/* Investment Value */}
          <InvestmentValue>
            <Label>Amount Invested</Label>
            <InputField
              focus
              value={`${initialInvestmentText}`}
              onChange={(value) => setInitialInvestmentText(value)}
            />
          </InvestmentValue>
        </Row>

        <Row>
          <DateRow>
            <VerticalStack>
              <Label>invested on</Label>
              <DatePicker
                value={investmentDate}
                onChange={handleInitialInvestmentDateChanged}
              />
            </VerticalStack>

            <VerticalStack>
              <DaysAgo>
                <Label>days ago</Label>
                <InputField
                  value={daysAgoText}
                  onChange={handleDaysAgoChanged}
                />
              </DaysAgo>
            </VerticalStack>
          </DateRow>
        </Row>

        <Row>
          <NowWorth>
            <Label>is now worth:</Label>
          </NowWorth>
        </Row>


        {/* Value Today */}
        {showResults && <ValueToday
          amountToday={investmentWorthToday}
          amountTodayInCrypto={amountCryptoCurrency}
          percentageIncrease={percentageDifference}
        />}
      </Content>

      <SideBar>
        <SidebarHeader>Options</SidebarHeader>

        {/* End date */}
        <SidebarItem>
          <Label>End date</Label>
          <DatePicker
            value={investmentDate}
            onChange={() => {}}
          />
        </SidebarItem>
      </SideBar>
    </Layout>
  );
}
