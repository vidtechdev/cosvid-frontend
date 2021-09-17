import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: var(--lightgray);
  height: 150px;
  margin-top: 1rem;
  justify-content: space-between;
  align-content: center;

  .footer-title {
    color: var(--darkblue);
    font-size: 0.75rem;
    font-weight: normal;
    font-family: Arial, sans-serif;
    align-content: center;
    margin: auto;
  }
  /* a {
    text-decoration: none;
  } */
`;

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <div className="footer-title">
          ...you have reached the end of the internets. Now go do somthing.
        </div>
      </FooterStyles>
    </>
  );
}
