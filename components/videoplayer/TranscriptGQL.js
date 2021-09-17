import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DisplayError from '../ErrorMessage';

const TranscriptHeadingStyles = styled.h2`
  font-family: Source Sans Pro, sans-serif;
  font-weight: 400;
  line-height: 1.2em;
  margin-top: 20px;
  font-size: 1.286rem;
`;

const TranscriptTextStyles = styled.p`
  font-size: 1rem;
  line-height: 1.286rem;
`;

// Query for Video Transcript text by videocode
const TRANSCRIPT_TEXT = gql`
  query TRANSCRIPT_TEXT($videocode: String!) {
    video(videocode: $videocode) {
      transcript
    }
  }
`;

export default function Transcript({ videocode }) {
  const { data, error, loading } = useQuery(TRANSCRIPT_TEXT, {
    variables: {
      videocode,
    },
  });
  if (loading) return <p>Getting transcript text...</p>;
  if (error) return <DisplayError error={error} />;

  const { transcript } = data.video;

  // Temporary fix for separating Career Cluster Description from Transcript text in video collection db
  // may need to rethink the video collection data model...

  const endMark = transcript.indexOf('>>');
  let transcriptText = '';
  if (transcript.includes('<<')) {
    transcriptText = transcript.slice(endMark + 3);
  } else {
    transcriptText = transcript;
  }

  return (
    <>
      <TranscriptHeadingStyles>Video Transcript</TranscriptHeadingStyles>
      <TranscriptTextStyles>{transcriptText}</TranscriptTextStyles>
    </>
  );
}

Transcript.propTypes = {
  videocode: PropTypes.string,
};
