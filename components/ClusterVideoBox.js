import PropTypes from 'prop-types';
import styled from 'styled-components';
import { server } from '../config';

const ClusterVideoStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  border: var(--grayblue) solid 1px;
  font-family: Verdana;
  margin-bottom: 10px;
  .title {
    background: var(--grayblue);
    padding: 1rem;
    font-weight: 600;
  }
`;
const TwoColumnVideoBox = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: 1rem 1rem 0.25rem 1rem;
  .video img {
    display: grid;
    grid-template-columns: 1fr;

    max-width: 100%;
  }
  p {
    text-align: center;
    /* font-family: Arial; */
    font-size: 1rem;
    color: var(--darkblue);
    font-weight: 600;
  }
  .note {
    text-align: center;
    margin-bottom: 0px;
    padding-bottom: 0px;
    font-size: 0.6rem;
    font-style: italic;
  }
`;

export default function ClusterVideoBox(props) {
  const { name, fileName } = props;
  return (
    <ClusterVideoStyles>
      <div className="title">{name}</div>
      <TwoColumnVideoBox>
        <div>
          <a href={`/videos/career-clusters/${fileName}-overview`}>
            <div className="video">
              <img
                alt={`${fileName} video thumbnail`}
                data-src={`${server}/stream/thumb/${fileName}-overview`}
                className="poster-image"
                src={`${server}/stream/thumb/${fileName}-overview`}
              />
              <p>{name} Overview</p>
            </div>
          </a>
          <div className="note">fetches page data via REST API</div>
        </div>
        <div>
          <a href={`/career-clusters/video/${fileName}-careers`}>
            <div className="video">
              <img
                alt={`${fileName} video thumbnail`}
                data-src={`${server}/stream/thumb/${fileName}-careers`}
                className="poster-image"
                src={`${server}/stream/thumb/${fileName}-careers`}
              />
              <p>{name} Careers</p>
            </div>
          </a>
          <div className="note">fetches page data via GraphQL</div>
        </div>
      </TwoColumnVideoBox>
    </ClusterVideoStyles>
  );
}

ClusterVideoBox.propTypes = {
  name: PropTypes.string,
  fileName: PropTypes.string,
};
