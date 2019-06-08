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

export default function Home() {
  React.useEffect(() => {
    console.log('I should fetch the current exchange rate');
  }, []);

  return (
    <Layout>
      <LoadingBar />
      <Header />
      <Content>
        <InputField />
        <InputField />
        <DatePicker />
        <ValueToday
          amountToday={2123}
          amountTodayInCrypto={0.1}
          percentageIncrease={400.1}
          />
      </Content>
    </Layout>
  );
}
