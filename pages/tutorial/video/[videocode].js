import { gql, useQuery } from '@apollo/client';
import PropTypes from 'prop-types';
import DisplayError from '../../../components/ErrorMessage';
import PageHeadingStyles from '../../../components/styles/PageHeadingStyles';
import VideoComponent from '../../../components/VideoComponent';

// Query for VIDEO TITLE
const VIDEO_TITLE = gql`
  query VIDEO_TITLE($videocode: String!) {
    video(videocode: $videocode) {
      title
    }
  }
`;
// TO DO:  Related information?

export default function TutorialVideo({ query }) {
  const { videocode } = query;
  const { data, error, loading } = useQuery(VIDEO_TITLE, {
    variables: {
      videocode,
    },
  });
  if (loading) return <p>Getting video title...</p>;
  if (error) return <DisplayError error={error} />;

  // console.log(data.video.title);
  return (
    <>
      <PageHeadingStyles>{data.video.title}</PageHeadingStyles>
      <VideoComponent
        videocode={query.videocode}
        type="tutorials-and-overviews"
      />
    </>
  );
}

TutorialVideo.propTypes = {
  query: PropTypes.object,
  videocode: PropTypes.string,
};
