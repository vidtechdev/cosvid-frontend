import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import LeftNavStyles from './styles/LeftNavStyles';

const GlobalStyles = createGlobalStyle`
html {
  font-size: 14px;
  font-weight: normal;
  font-family: Arial, Helvetica, Verdana, sans-serif;
  --white: #fff;
  --red: #ea1738;
  --darkblue: #004481;
  --aqua: #027aad;
  /* --graybluelight: ; */
  /* --greybluelight: var(--graybluelight); */
  --grayblue: #bfd0df;
  --greyblue: var(--grayblue);
  --gray: #70757c;
  --grey: var(--gray);
  --lightgray: #f0f1f4;
  --lightgrey: var(--lightgray);
  --blue: #004481;
  --green: #12866e;
  --tan: #7a756c;
  --orange: #A56716;
  --purple: #583058;

  max-width: 1080px;
  margin: auto;
  box-shadow: 0 0 12px rgb(0 0 0 / 30%);
  padding: .75rem;

  li {
    list-style: none;
  }
  .border {
    border: var(--grayblue) solid 1px;
  }
  .nav-header {
    display: none;

  }
  @media only screen and (max-width: 640px) {
    /* display:grid;
    grid-row: 2/3;
    grid-row-start: 2;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    font-size: 1rem;
    text-align: left;
    font-size: 0.7rem; */
    .nav-header {
      display: grid;
      grid-row: 1/2;
      background: var(--aqua);
      color: var(--white);
      font-size: 1.5rem;
      padding: 1rem;
      margin-bottom: -.5rem;
    }
  }
 
}
`;

const PageStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 270px) minmax(70%, 1fr);
  grid-row: auto;
  gap: 2rem;
  padding-top: 1.1rem;
  @media only screen and (max-width: 640px) {
    grid-template-columns: minmax(auto, 1fr);
    grid-template-rows: auto;
  }
`;

const PageContentStyles = styled.div`
  /* background: #a5671640; */
  /* border: var(--lightgrey) 1px solid; */
  /* @media only screen and (max-width: 640px) {
    grid-row: 1/2;
  } */
  video {
    width: 100%;
    margin: 0 auto;
  }
`;

const SocialBlockStyles = styled.div`
  /* grid-template-rows: minmax(auto, 1fr); */
  padding: 10px 0px;
  font-size: 1.3rem;
  font-weight: bold;
  border-bottom: var(--grayblue) 1px solid;
  text-align: right;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PageStyles>
        <LeftNavStyles>
          <Nav />
        </LeftNavStyles>
        <PageContentStyles>
          <SocialBlockStyles>Social Icons Block</SocialBlockStyles>
          {children}
        </PageContentStyles>
      </PageStyles>
      <Footer />
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
