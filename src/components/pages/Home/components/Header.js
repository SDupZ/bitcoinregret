import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  grid-area: grid-header;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 24px 60px 24px 60px;
  color: white;
  text-align: center;
  @media only screen and (min-width: 600px) {
    justify-content: left;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>Bitcoin Regret</Title>
    </Wrapper>
  );
}
