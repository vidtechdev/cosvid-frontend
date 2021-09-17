import styled from 'styled-components';

const ImageStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  background-image: url('https://www.careeronestop.org/TridionMultimedia/tcm24-31772_iStock_79424897_XLARGE-min.jpg');
  background-size: cover;
  height: 150px;

  padding-left: 30px;
  justify-content: space-between;
  align-content: center;

  .title-box {
    background: rgba(255, 255, 255, 0.9);
    align-self: end;
    align-content: center;
    /* border: solid red 1px; */
  }
  .page-title {
    color: var(--darkblue);
    font-size: 1.4rem;
    font-weight: normal;
    font-family: Arial, sans-serif;
    /* border: solid 1px pink; */
  }
  p {
    margin: 20px 25px;
    font-weight: normal;
  }
  a {
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <>
      <ImageStyles>
        <div className="title-box">
          <div className="page-title">
            <p>Video Library</p>
          </div>
        </div>
      </ImageStyles>
    </>
  );
}
