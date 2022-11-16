import styled from 'styled-components';

const LeftNavStyles = styled.nav`
  background: var(--greyblue);
  display: grid;

  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  max-height: 350px;
  font-size: 1rem;
  padding: 1.7rem 1.3rem;
  gap: 0.5rem;

  a {
    display: grid;
    background: #fff;
    color: var(--aqua);
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-decoration: none;
    align-content: center;

    :hover {
      background: var(--aqua);
      color: #fff;
    }
    :active {
      background: var(--aqua);
      color: #fff;
    }
  }

  @media only screen and (max-width: 800px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 640px) {
    grid-row: 2/3;
    /* grid-row-start: 2; */
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    font-size: 1rem;
    text-align: left;
    margin-top: 0.5rem;
    /* font-size: 0.7rem; */
  }
`;

export default LeftNavStyles;
