import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { server } from '../../config';

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

export default function Transcript({ videocode }) {
  const [videoData, setVideoData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getVideoData = () => {
      fetch(`${server}/api/videos/${videocode}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then((res) => {
          if (res.status >= 400) {
            throw new Error('Server responded with error');
          }
          return res.json();
        })
        .then(
          (data) => {
            setVideoData(data);
            setIsLoaded(true);
          },
          (err) => {
            setErr(err);
            setIsLoaded(true);
          }
        );
    };
    getVideoData();
  }, [videocode]);

  if (err) {
    return <p>Transcript data error -- {err.message}</p>;
  }
  if (!isLoaded) {
    return <p>Transcript is loading...</p>;
  }
  const { transcript } = videoData;

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
