import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import VideoComponent from '../../../components/VideoComponent';
import PageHeadingStyles from '../../../components/styles/PageHeadingStyles';
import DisplayError from '../../../components/ErrorMessage';

// Query for SINGLE VIDEO by videocode
const SINGLE_VIDEO_QUERY = gql`
  query SINGLE_VIDEO_QUERY($videocode: String!) {
    video(videocode: $videocode) {
      title
      transcript
    }
  }
`;

export default function SingleClusterVideoPage({ query }) {
  const { clustervideo } = query;
  const { data, error, loading } = useQuery(SINGLE_VIDEO_QUERY, {
    variables: {
      videocode: clustervideo,
    },
  });
  if (loading) return <p>Getting cluster video data via GraphQL</p>;
  if (error) return <DisplayError error={error} />;

  const { title, transcript } = data.video;
  const endMarker = transcript.indexOf('>');
  const description = transcript.slice(2, endMarker);

  return (
    <>
      <PageHeadingStyles>{title}</PageHeadingStyles>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <VideoComponent videocode={clustervideo} type="cluster" />
    </>
  );
}

SingleClusterVideoPage.propTypes = {
  query: PropTypes.object,
  clustervideo: PropTypes.string,
};
