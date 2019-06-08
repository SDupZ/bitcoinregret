import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import LoadingBar from './components/LoadingBar';

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

export default function Home() {
  React.useEffect(() => {
    console.log('I should fetch the current exchange rate');
  }, []);

  return (
    <Layout>
      <LoadingBar />
      <Header />
    </Layout>
  );
}
