import React from 'react';
import styled from 'styled-components';
import MOBILE from 'components/breakpoints';

import { Caption } from '../home.styled';

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  text-align: center;
  @media only screen and (max-width: ${MOBILE}px) {
    align-items: center;
  }
`;

const Title = styled.h2`
  display: block;
  margin: 0;
  font-size: 26px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Title>Bitcoin Regret</Title>
      <Caption>FOMO and ROI calculator for Bitcoin</Caption>
    </Wrapper>
  );
}
