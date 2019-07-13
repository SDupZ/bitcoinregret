import React from 'react';
import styled from 'styled-components';
import MOBILE from 'components/breakpoints';

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  @media only screen and (min-width: ${MOBILE}px) {
    justify-content: left;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 26px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>Bitcoin Regret</Title>
    </Wrapper>
  );
}
