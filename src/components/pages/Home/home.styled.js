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
  grid-template-rows: 80px 1fr 50px;
  grid-template-areas:
    'leftEdge header header rightEdge'
    'leftEdge content sidebar rightEdge'
    'footer footer footer footer';
`;

export const Content = styled.div`
  grid-area: content;
  margin-top: 100px;
  text-align: center;
`;

export const SideBar = styled.div`
  grid-area: sidebar;
  margin-top: 100px;
`;

export const SidebarHeader = styled.div`
  font-size: 24px;
  margin-bottom: ${spacingBase};
`;

export const SidebarItem = styled.div`
  margin-bottom: ${spacingBase};
`;

export const SidebarLabel = styled.div`
  margin-bottom: ${spacingMd};
`;