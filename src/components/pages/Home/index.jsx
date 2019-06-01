import React from 'react';
import styled from 'styled-components';

import AmountField from 'components/unique/AmountField';
import InitialInvestment from 'components/unique/InitialInvestment';
import TimeAgo from 'components/unique/TimeAgo';
import DateField from 'components/unique/DateField';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar';

import './styles.css';

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #18232E;
  color: white;

  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:  "grid-header"
                        "grid-content"
                        "grid-footer";
`;

export default function Home() {
  return (
    <Layout>
      <LoadingBar />
      <Header />

      <main className="c-content">
        <div className="c-amountContainer">
          <div className="c-amountInput"><InitialInvestment /></div>
          <p className="c-amountText">invested on</p>
          <DateField />
        </div>
        <div className="c-daysInput">
          <TimeAgo />
        </div>
        <AmountField />
      </main>

      <footer />
    </Layout>
  );
}
