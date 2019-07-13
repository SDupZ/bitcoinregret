import styled from 'styled-components';
import MOBILE from 'components/breakpoints';
import { spacingBase, spacingSm, spacingXXL } from 'components/spacing';

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #18232e;
  
  grid-template-columns: minmax(0, 1fr) minmax(${Math.floor(MOBILE * 4 / 6)}px, 10fr) minmax(${Math.floor(MOBILE * 1 / 6)}px, 3fr) minmax(0, 1fr);
  grid-template-rows: 120px 1fr 50px;
  grid-template-areas:
    'leftEdge header header rightEdge'
    'leftEdge content sidebar rightEdge'
    'footer footer footer footer';
  grid-column-gap: 20px;
  @media only screen and (max-width: ${MOBILE}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 90px 1fr 1fr 40px;
    grid-template-areas:
      'header'
      'content'
      'sidebar'
      'footer';
  }
`;

export const Content = styled.div`
  grid-area: content;
  text-align: center;

  @media only screen and (max-width: ${MOBILE}px) {
    padding: 0 20px;
    overflow: hidden;
  }
`;

export const SideBar = styled.div`
  grid-area: sidebar;
  margin-left: 20px;

  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

export const SidebarItem = styled.div`
  margin-bottom: ${spacingBase};
`;

export const Label = styled.div`
  margin-bottom: ${spacingSm};
  color: white;
`;

export const Caption = styled.div`
  font-size: 12px;
  color: white;
  font-weight: 300;
  margin-bottom: ${spacingSm};
`;

export const InvestmentValue = styled.div`
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${MOBILE}px) {
    display: block;
    margin: 20px 0;
  }

  &:after {
    content: "$";
    top: 50%;
    left: 0;
    position: absolute;
    transform: translate(-120%, -50%);
    font-size: 28px;
    color: white;
  }
`;

export const VerticalStack = styled.span`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const DateRow = styled.div`
  display: flex;
  justify-content: center;
  color: white;

  margin-top: ${spacingBase};
  margin-bottom: ${spacingXXL};

  & > * {
    margin-right: 54px;

    &:last-child {
      margin-right: 0;
    }
  }

`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${MOBILE}px) {
    display: block;
  }
`;

export const NowWorth = styled.div`
  margin-bottom: ${spacingXXL};
`;

export const DaysAgo = styled.div`
  width: 120px;
`;