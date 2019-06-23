import styled from 'styled-components';
import MOBILE from 'components/breakpoints';
import { spacingBase, spacingMd } from 'components/spacing';

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #18232e;
  color: white;
  
  grid-template-columns: 1fr minmax(${Math.floor(MOBILE * 2 / 3)}px, 5fr) minmax(${Math.floor(MOBILE / 3)}px, 1fr) 1fr;
  grid-template-rows: 120px 1fr 50px;
  grid-template-areas:
    'leftEdge header header rightEdge'
    'leftEdge content sidebar rightEdge'
    'footer footer footer footer';
`;

export const Content = styled.div`
  grid-area: content;
  text-align: center;
`;

export const SideBar = styled.div`
  grid-area: sidebar;
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