import React from 'react';
import styled from 'styled-components';
import MOBILE from 'components/breakpoints';
import { Link } from 'react-router-dom';

import { Caption } from '../home.styled';

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${props => props.light ? '#22242B' : 'white'};
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

const StyledLink = styled(Link)`
  text-align: left;
  color: ${props => props.light ? '#22242B' : 'white'};
  text-decoration: none;
`;

export default function Header(props) {
  const { light } = props;
  return (
    <Wrapper light={light}>
      <StyledLink light={light} to="/">
        <Title>Bitcoin Regret</Title>
        <Caption light={light}>FOMO and ROI calculator for Bitcoin</Caption>
      </StyledLink>
    </Wrapper>
  );
}
