import React from 'react';

import useIsMobile from 'hooks/useIsMobile';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar/index';
import InputField from './components/InputField';
import ValueToday from './components/ValueToday';
import DatePicker from './components/DatePicker/DatePicker';

import useCalculateReturns from './useCalculateReturns';
import calculateDaysBetweenTwoDates from './utils';

import binanceLogo from './binance.png';
import binanceQRCode from './qrcode.png';

import {
  Layout,
  Content,
  SideBar,
  SidebarItem,
  Label,
  InvestmentValue,
  VerticalStack,
  Row,
  DateRow,
  NowWorth,
  DaysAgo,
  Caption,
  ReferralLink,
  ReferralImage,
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
  const isMobile = useIsMobile();

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

  const referralLink = isMobile ? 'https://www.binance.com/m-HomePage.html?ref=11873092' : 'https://www.binance.com/?ref=11873092';

  return (
    <Layout>
      <LoadingBar />
      <Header />
      <Content>
        <Row>
          {/* Investment Value */}
          <InvestmentValue>
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
        <SidebarItem>
          <Label>Want to start trading?</Label>
          <Caption>We only recommend platforms we trust with our own&nbsp;funds</Caption>
          <ReferralLink data-ga-label="binance-cta" href={referralLink} target="_blank">
            <ReferralImage src={binanceLogo} alt="Binance Logo" />
            <ReferralImage src={binanceQRCode} alt="Binance QR code" />
            </ReferralLink>
        </SidebarItem>
        <SidebarItem>
          {/* <Label>Date sold</Label>
          <Caption>Defaults to today</Caption>
          <DatePicker
            value={investmentDate}
            onChange={() => {}}
          /> */}
        </SidebarItem>
      </SideBar>
    </Layout>
  );
}
