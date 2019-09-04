import styled from 'styled-components';
import MOBILE from 'components/breakpoints';

export const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  min-width: 100%;
  background: #F6F7F9;
  
  grid-template-columns: minmax(0, 1fr) minmax(${Math.floor(MOBILE * 4 / 6)}px, 10fr) minmax(${Math.floor(MOBILE * 1 / 6)}px, 3fr) minmax(0, 1fr);
  grid-template-rows: 120px 1fr 50px;
  grid-template-areas:
    'leftEdge header header rightEdge'
    'leftEdge content content rightEdge'
    'leftEdge footer footer rightEdge';
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
  text-align: left;
  color: #22242B;

  @media only screen and (max-width: ${MOBILE}px) {
    margin: 20px;
    overflow: hidden;
  }

  p {
    font-weight: 300;
  }
`;

export const Footer = styled.div`
  display: flex;
  grid-area: footer;
  color: #22242B;
  font-weight: 300;
  > * + * {
    margin-left: 20px;
    margin-bottom: 30px
  }
`;

export const PolicyContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

export const H3 = styled.h3`
  color: white;
`;

export const Paragraph = styled.p`
  color: white;
  font-weight: 300;
`;