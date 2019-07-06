import styled from 'styled-components';
import MOBILE from 'components/breakpoints';
import { spacingBase, spacingMd } from 'components/spacing';

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #18232e;
  
  grid-template-columns: 1fr minmax(${Math.floor(MOBILE * 1 / 6)}px, 3fr) minmax(${Math.floor(MOBILE * 4 / 6)}px, 5fr) minmax(${Math.floor(MOBILE * 1 / 6)}px, 3fr) 1fr;
  grid-template-rows: 120px 1fr 50px;
  grid-template-areas:
    'leftEdge header header header rightEdge'
    'leftEdge sidebar content rightSidebar rightEdge'
    'footer footer footer footer footer';

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
  }
`;

export const SideBar = styled.div`
  grid-area: sidebar;

  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: ${spacingBase};
`;

export const SidebarItem = styled.div`
  margin-bottom: ${spacingBase};
`;

export const SidebarLabel = styled.div`
  margin-bottom: ${spacingMd};
`;

export const InvestedOn = styled.span`
  margin: 0 30px;
`;

export const NowWorth = styled.div`
  margin: 30px 0;
`;

export const InvestmentValue = styled.span`
  display: inline-block;
  position: relative;

  @media only screen and (max-width: ${MOBILE}px) {
    display: block;
    margin: 20px 0;

    > div {
      width: 100%;
    }
  }

  &:after {
    content: "$";
    top: 50%;
    left: 0;
    position: absolute;
    transform: translate(-120%, -50%);
    font-size: 28px;
  }
`;

export const DaysAgo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > * {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`;